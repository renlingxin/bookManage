<!--  -->
<template>
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
</template>

<script>
import Middle from "../../public/Middle.js";
export default {
  props: ["pageSize", "totalNum"],
  name: "pagination",
  data() {
    return {
      currentPage: 1, //默认显示第一页
    };
  },
  created() {
  },
  methods: {
    //   分页
    handleSizeChange(val) {
      this.pageSize = val; //动态改变
      Middle.$emit("pageSize", this.pageSize);
    },
    handleCurrentChange(val) {
      this.currentPage = val; //动态改变
      Middle.$emit("currentPage", this.currentPage);
    }
  }
};
</script>
<style scoped>
</style>