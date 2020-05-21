<template>
  <!-- 头部 -->
  <div class="head tantan">
    <!-- 标题 -->
    <div class="definition tantan">
      <img src="../../../static/img/书.png" alt />
      {{$t('m.title')}}
    </div>
    <!-- 设置 -->
    <div class="setup tantan">
      <i class="el-icon-edit" @click="jump"></i>
      <i class="el-icon-share" @click="jump"></i>
      <i class="el-icon-circle-close" @click="removle"></i>

      <!-- 语言 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{$t('m.lange')}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="imge">
            <img src="../../../static/img/国旗.png" alt @click="lange('zh')" />
          </el-dropdown-item>
          <el-dropdown-item>
            <img src="../../../static/img/国旗-英国.png" alt @click="lange('en')" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 头像 -->
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$notify({
        title: "提示",
        message: "这是一个还没有实现的功能",
        type: "warning"
      });
    },
    // 退出登录
    removle() {
      if (localStorage.getItem("admin")) {
        localStorage.removeItem("admin");
        this.$notify({
          title: "成功",
          message: "退出成功",
          type: "success"
        });
        this.$router.push({
          name: "login"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "您还没有登录",
          type: "warning"
        });
      }
    },
    // 切换语言
    lange(type) {
      console.log(type);
      this.$i18n.locale = type;
    }
  }
};
</script>

<style scoped>
/* 头部 */
.head {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  /* background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 40px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 30px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px; */
}
/* 标题 */
.definition {
  width: 170px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.definition img {
  width: 35px;
  height: 35px;
}
/* 设置+头像 */
.setup {
  width: 300px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
/* 语言 */
.el-dropdown {
  color: #fff;
  margin-left: 10px;
}
.imge img {
  width: 27px;
  height: 17px;
}
.setup i {
  margin-left: 8px;
  cursor: pointer;
}
</style> 