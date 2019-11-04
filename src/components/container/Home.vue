<template>
  <div class="global_container">
    <navbars class="navbar"></navbars>
    <asides class="aside"></asides>
    <!-- 内容 -->
    <div class="substance">
      <router-view></router-view>
    </div>
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

<style scoped>
.global_container {
}
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
}
.aside {
  position: fixed;
  top: 60px;

}
.substance {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 70px;
  left: 180px;
  background-color: rgb(238, 238, 238);
}
</style> 