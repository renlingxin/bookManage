<template>
  <div style="width: 100%;overflow:auto;margin-bottom:150px;">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">分类管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格数据详情 -->
    <div class="info">
      <h3 style="margin:8px">分类详情</h3>
      <hr />
      <el-button type="primary" size="small" @click="addCategoryList()" style="margin:10px">添加</el-button>
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width:85%"
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
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="updateCategory(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deletesCategory(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <hr />
      <!-- 分页 -->
      <pagination :totalNum="totalNum" :pageSize="pageSize"></pagination>
      <!-- 编辑弹框 -->
      <el-dialog title="修改类目信息" :visible.sync="categoryEditing" :modal-append-to-body="false">
        <el-form :model="updateData">
          <el-form-item label="分类" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择分类">
              <el-option label="古今历史" value="1"></el-option>
              <el-option label="新闻纪要" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="updateData.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="图片:" :label-width="formLabelWidth">
            <el-input v-model="updateData.img" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="categoryEditing = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Middle from "../../public/Middle.js";
export default {
  data() {
    return {
      tableData: [], //数据
      currentPage: 1, //默认显示第一页
      pageSize: 0, //默认每页显示0条
      totalNum: 0, //总页数
      updateData:{},
      categoryEditing: false,
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
    this.getCategoryList();
    this.getPaginNum();
  },
  methods: {
    // 跳转至添加数据
    addCategoryList() {
      this.$router.push({
        path: "/category/add"
      });
    },
    // 获取类目数据
    getCategoryList() {
      //   获取数据
      this.$axios
        .get(`type`)
        .then(res => {
          this.tableData = res.data;
          this.totalNum = this.tableData.length;
          this.pageSize = 5;
        })
        .catch(console.log);
    },
    //   分页
    getPaginNum() {
      Middle.$on("pageSize", num => {
        this.pageSize = num;
      });
      Middle.$on("currentPage", num => {
        this.currentPage = num;
      });
    },
    //   删除类目
    deletesCategory(data) {
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
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(console.log);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //   编辑
    updateCategory(data) {
      this.categoryEditing = true;
      this.updateData = data
    },
    // 提交编辑修改
    updateSubmit() {
      this.categoryEditing = false
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
  overflow: auto;
}
</style>
