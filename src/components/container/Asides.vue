<template>
  <div>
    <div class="aside">
      <el-aside style="width:170px">
        <!-- 商家 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-if="asideTypeShow === 1"
        >
          <el-menu-item index="1">
            <i class="el-icon-reading"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>店铺</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">商品</el-menu-item>
              <el-menu-item index="2-2">订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-s-data"></i>
            <span slot="title">数据</span>
          </el-menu-item>
        </el-menu>
        <!-- 管理员 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-if="asideTypeShow === 0"
        >
          <!-- 类目 -->
          <router-link :to="{path:'/index'}">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <!-- 账号管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/admin'}">
                <el-menu-item index="2-1">管理员</el-menu-item>
              </router-link>
              <router-link :to="{path:'/user'}">
                <el-menu-item index="2-2">用户列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/author'}">
                <el-menu-item index="2-3">作者列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 内容管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/book'}">
                <el-menu-item index="3-1">书文列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/img'}">
                <el-menu-item index="3-2">图文列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 分类 -->
          <router-link :to="{path:'/category'}">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">分类</span>
            </el-menu-item>
          </router-link>
          <!-- 商品 -->
          <router-link :to="{path:'/shop'}">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">商品</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 调控侧边栏显示-商户-管理
      asideTypeShow: 0
    };
  }
};
</script>

<style lang="less" scoped>
.aside {
  position: fixed;
  top: 60px;
  bottom: 0;
}
/* 左侧导航 */
.el-aside {
  width: 170px;
  height: 100vh;
  overflow-x: hidden;
}
.el-menu-vertical-demo {
  width: 100%;
  /* 满屏显示 */
  height: 100vh;
}
</style> 