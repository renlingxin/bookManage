<template>
  <div>
    <!-- 商家 -->
    <div v-if="false">
      <el-aside style="width:170px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>店铺</span>
            </template>
            <el-menu-item-group>
              <el-menu-item>商品</el-menu-item>
              <el-menu-item>订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">数据</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title">管理员</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title">管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </div>
    <!-- 管理 -->
    <div>
      <el-aside style="width:170px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 管理员 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/admin'}">
                <el-menu-item>管理员列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/admin/add'}">
                <el-menu-item>添加管理员</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 用户 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/user/list'}">
                <el-menu-item>用户列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/user/add'}">
                <el-menu-item>添加用户</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 书文管理 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>书文管理</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/book/list'}">
                <el-menu-item>书文列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/book/add'}">
                <el-menu-item>添加书文</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 图文分享 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图文分享</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/img/list'}">
                <el-menu-item>图文列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/img/add'}">
                <el-menu-item>添加图文</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 作者管理 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>作者管理</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/author/list'}">
                <el-menu-item>作者列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/img/add'}">
                <el-menu-item>添加作者</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/shop/list'}">
                <el-menu-item>商品列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/shop/add'}">
                <el-menu-item>添加商品</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 分类管理 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分类</span>
            </template>
            <el-menu-item-group>
              <router-link :to="{path:'/type/list'}">
                <el-menu-item>分类列表</el-menu-item>
              </router-link>
              <router-link :to="{path:'/type/add'}">
                <el-menu-item>添加分类</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "aside",
  data() {
    return {};
  }
};
</script>

<style scoped>
/* 左侧导航 */
.el-aside {
  border-top: 1px solid rgb(134, 134, 134);
}
.el-menu {
}
.el-menu-vertical-demo {
  width: 170px;
  height: 700px;
}
span{
  font-size: 16px;
}
li{
  font-size: 12px;
}
</style> 