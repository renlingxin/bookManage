<!-- 公共组件-分页 -->
<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="bothPageSizes"
      :page-size="bothSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      required: true,
      type: Number,
      default: 10
    },
    current: {
      required: true,
      type: Number,
      default: 1
    },
    total: {
      required: true,
      type: Number,
      default: 0
    },
    pageSizes:{
      type:Array,
      default:()=>{
        return [1, 3, 5, 8]
      } 
    }
  },
  name: "pagination",
  data() {
    return {
      bothCurrent: this.current, //默认显示第一页
      bothSize: this.size,
      bothPageSizes:this.pageSizes
    };
  },
  methods: {
    handleSizeChange(val) {
      this.bothSize = val;
      this.$emit("on-change", { current:this.bothCurrent, size:val});
    },
    handleCurrentChange(val) {
      this.bothCurrent = val;
      this.$emit("on-change", { current:val, size:this.bothSize});
    }
  }
};
</script>
<style scoped>
</style>