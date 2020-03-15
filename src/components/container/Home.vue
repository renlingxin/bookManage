<template>
  <div class="global_container">
    <el-container>
      <el-header class="top-header">
        <navbars></navbars>
      </el-header>
      <el-container class="main">
        <el-aside width="170px">
          <asides class="aside"></asides>
        </el-aside>
        <el-container>
          <el-main class="content">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asides from "./Asides.vue";
import navbars from "./Navbars.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    asides,
    navbars
  },
  created() {}
};
</script>

<style lang="less" scoped>
.global_container {
  width: 100%;
  height: 100%;
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .main {
    padding-top: 60px;
    height: 50%;
    max-height: 100vh;
    min-width: 1280px;
    padding-bottom: -60px;
  }
}

.el-header {
  padding: 0;
}
.content {
  flex: 1;
  height: 100%;
  overflow: scroll;
}
</style> 