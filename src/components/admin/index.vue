<template>
  <div style="width: 100%">
    <el-card shadow="never">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="name" label="昵称" width="150"></el-table-column>
        <el-table-column prop="pass" label="密码" width="120"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
        <el-table-column prop="addtime" label="添加时间" width="120">
          <template slot-scope="row">{{row.addtime | converTime}}</template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center" fixed="right">
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
      size: 5, //默认每页显示10条
      total: 0 //总页数
    };
  },
  methods: {
    // 分页响应
    pageChange({ size, current }) {
      Object.assign(this, { current, size });
    },
    //   修改
    handleClick(data) {
      // console.log(data);
      this.$router.push({
        name: "make",
        params: { makedata: data }
      });
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
            .get(`admin/del?id=` + data.id)
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
    }
  },
  created() {
    this.$axios
      .get(`admin`)
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

<style lang="less" scoped>
@import "./index.less";
</style>
