<template>
  <div class="nofound">
    <img src="../../static/img/页面不存在.png" alt />
    <h3>对不起，您访问的页面不存在~</h3>
    <div style="margin-top:35px">
      <el-button type="text" @click="backHome">返回首页</el-button>
      <el-button type="text" @click="backUp">返回上一页({{time}}s)</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 5
    };
  },
  created() {
    this.countdown();
  },
  methods: {
    countdown() {
      let t = setInterval(() => {
        this.time -= 1;
        if (Number(this.time) === 0) {
          clearInterval(t);
          this.backUp()
        }
      }, 1000);
    },
    backHome() {
      this.$router.push("/");
    },
    backUp() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="less" scoped>
.nofound {
  width: 100%;
  text-align: center;
}
.nofound img {
  width: 150px;
  height: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>