<template>
  <div style="width: 100%">
    <el-card>
      <el-table
        :data="tableData.slice((current-1)*size,current*size)"
        border
        style="width: 100%"
        size="small"
      >
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="title" label="商品描述" width="400"></el-table-column>
        <el-table-column prop="add_time" label="添加时间" width="150">
          <template slot-scope="scope">{{scope.row.add_time | converTime('YYYY-MM-DD HH:mm')}}</template>
        </el-table-column>
        <el-table-column prop="stock" label="剩余存量" width="100"></el-table-column>
        <el-table-column prop="img_url" label="商品简介图" width="120">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img_url" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="sell_price" label="现价" width="120"></el-table-column>
        <el-table-column prop="market_price" label="原价" width="120"></el-table-column>
        <el-table-column prop="page" label="显示页" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="deletes(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <ren-pagination
        :total="total"
        :size="size"
        :current="current"
        @on-change="pageChange"
        class="block"
      ></ren-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      current: 1, //默认显示第一页
      size: 8, //默认每页显示10条
      total: 0 //总页数
    };
  },
  methods: {
    // 分页响应
    pageChange({ size, current }) {
      console.log(current, size);
      Object.assign(this, { current, size });
    },
    //   删除
    deletes(data) {
      // console.log(data.id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
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
            .get(`shop/del?id=` + data.id)
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
      // console.log(data);
      this.$router.push({
        name: "upshop",
        params: { makedata: data }
      });
    }
  },
  created() {
    //   获取数据
    this.$axios
      .get(`shop`)
      .then(res => {
        // console.log(res);
        this.tableData = res.data;
        // 赋值总条数
        this.total = this.tableData.length;
      })
      .catch(console.log);
  }
};
</script>
<style></style>
