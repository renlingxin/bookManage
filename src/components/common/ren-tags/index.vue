<!--  -->
<template>
  <div style="margin-bottom:5px">
    <el-card>
      <el-breadcrumb separator="/" v-for="(item,index) in tagLists" :key="index">
        <el-breadcrumb-item  :to="item.path">{{item.title}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item> -->
      </el-breadcrumb>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  watch: {
    // $route: {
    //   handler(va) {
    //     // console.log(va);
    //     if(va) this.$store.commit('ADD_TAGS',va)
    //   }
    // }
  },
  computed: {
    tagLists:function(){
        return this.$store.state.routerTags.Tags
    }
  },
  components: {},

  methods: {},

  mounted() {}
};
</script>
<style lang='less' scoped>
/deep/ .el-card__body {
  padding: 10px;
}
</style>