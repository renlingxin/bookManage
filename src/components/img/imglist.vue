<template>
  <div style="width: 100%">
    <el-card shadow="never">
      <el-table :data="tableData.slice((current-1)*size,current*size)" border style="width: 100%">
        <el-table-column prop="categoryId" label="分类ID" width="120"></el-table-column>
        <el-table-column prop="id" label="ID" width="120"></el-table-column>
        <el-table-column prop="title" label="标题" width="150"></el-table-column>
        <el-table-column prop="img_url" label="图片" width="150">
          <!-- 显示图片 -->
          <template slot-scope="scope">
            <img :src="scope.row.img_url" alt width="60" height="60" />
          </template>
        </el-table-column>
        <el-table-column prop="zhaiyao" label="摘要" width="450"></el-table-column>
        <el-table-column prop="authorID" label="作者" width="120"></el-table-column>
        <el-table-column label="操作" width="100">
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
            .get(`img/del?id=` + data.id)
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
        name: "upimg",
        params: { makedata: data }
      });
    }
  },
  created() {
    //   获取数据
    this.$axios
      .get(`img`)
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
<style></style>;
