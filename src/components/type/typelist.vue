<template>
  <div style="width: 100%">
    <!-- <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>-->

    <!-- 面包屑 -->
    <div></div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">分类管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格数据详情 -->
    <div class="info">
      <h3 style="margin:8px">分类详情</h3>
      <hr />
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width: 100%"
      >
        <el-table-column prop="id" label="ID" width="120"></el-table-column>
        <el-table-column prop="tid" label="分类ID" width="120"></el-table-column>
        <el-table-column prop="title" label="标题" width="120"></el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deletesType(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 3, 5, 8]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
        ></el-pagination>
      </div>

      <!-- 编辑弹框 -->
      <el-dialog title="收货地址" :visible.sync="typeEditing" append-to-body="true" custom-class="dia">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [], //数据
      currentPage: 1, //默认显示第一页
      pageSize: 4, //默认每页显示10条
      totalNum: 1000, //总页数
      typeEditing: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.getTypeListData();
  },
  methods: {
    getTypeListData() {
      //   获取数据
      this.$axios
        .get(`type`)
        .then(res => {
          // console.log(res);
          this.tableData = res.data;
          this.totalNum = this.tableData.length;
        })
        .catch(console.log);
    },
    //   分页
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    //   删除
    deletesType(data) {
      // console.log(data.id);
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.forEach((item, index) => {
            if (item.id === data.id) {
              this.tableData.splice(index, 1);
            }
          });
          this.$axios
            .get(`type/del?id=` + data.id)
            .then(res => {
              // console.log(res);
            })
            .catch(console.log);

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //   编辑修改
    handleClick(data) {
      this.typeEditing = true;
      // console.log(data);
      // this.$router.push({
      //   name: "uptype",
      //   params: { makedata: data }
      // });
    }
  }
};
</script>
<style scoped>
.el-breadcrumb {
  width: 100%;
  height: 25px;
  background-color: #fff;
}
.info {
  margin-top: 5px;
  background-color: #fff;
  overflow: hidden;
}
.dia {
  position: fixed;
  right: 0;
}
</style>
