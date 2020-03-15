<template>
  <div class="hello">
    <div class="atap">
      <h2>书园</h2>
      <!-- 导航-tab切换 -->
      <ul class="navbato tantan">
        <li @click="isShow = 1" :class="isShow === 1 ? 'active' : ''">账号密码</li>
        <li @click="isShow = 2" :class="isShow === 2 ? 'active' : ''">立即注册</li>
      </ul>
      <!-- 登录 -->
      <div class="login" v-show="isShow === 1">
        <el-form
          :model="loginFrom"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="usermake tantan"
        >
          <el-form-item prop="loginName">
            <el-input
              placeholder="请输入账号"
              v-model="loginFrom.loginName"
              clearable
              prefix-icon="iconfont icon-yonghu"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginPass">
            <el-input
              placeholder="请输入密码"
              v-model="loginFrom.loginPass"
              show-password
              clearable
              prefix-icon="iconfont icon-mima"
            ></el-input>
          </el-form-item>
        </el-form>
        <button @click="login">立即登录</button>
      </div>
      <!-- 立即注册 -->
      <div class="login" v-show="isShow === 2">
        <el-form
          :model="registerFrom"
          :rules="registerRuleForm"
          ref="registerRuleForm"
          label-width="100px"
          class="usermake tantan"
        >
          <el-form-item prop="registerNickname">
            <el-input
              placeholder="请输入昵称"
              v-model="registerFrom.registerNickname"
              clearable
              prefix-icon="iconfont icon-yonghu"
            ></el-input>
          </el-form-item>
          <el-form-item prop="registerPhone">
            <el-input
              placeholder="请输入手机号"
              v-model="registerFrom.registerPhone"
              clearable
              prefix-icon="iconfont icon-shouji"
            ></el-input>
          </el-form-item>
          <el-form-item prop="registerPass">
            <el-input
              placeholder="请输入密码"
              v-model="registerFrom.registerPass"
              show-password
              clearable
              prefix-icon="iconfont icon-yanzhengma"
            ></el-input>
          </el-form-item>
        </el-form>
        <button @click="register">立即注册</button>
      </div>
    </div>
    <div class="bottom-title">2020 shuyuan.cn All Rights Reserved 北京ren科技有限公司 京ICP备14021452号-13</div>
  </div>
</template>

<script>
import { login } from "../../api/login";
export default {
  name: "login",
  data() {
    var validateName = (rule, value, callback) => {
      // 判断手机号格式  13,17,15,18开头   11位
      let reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
      if (value === "" || value === null) {
        callback(new Error("请输入手机号"));
      } else if (!reg.test(value)) {
        callback(new Error("您输入的手机号格式不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,30}$/;
      if (value === "" || value === null) {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入八位以上，包含数字字母的密码！"));
      } else {
        callback();
      }
    };
    return {
      // 登录账号密码
      loginFrom: {
        loginName: null,
        loginPass: null
      },
      // 立即注册
      registerFrom: {
        registerNickname: null,
        registerPhone: null,
        registerPass: null
      },
      // 登录验证规则
      rules: {
        loginName: [{ validator: validateName, trigger: "blur" }],
        loginPass: [{ validator: validatePass, trigger: "blur" }]
      },
      registerRuleForm: {
        registerNickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        registerPhone: [{ validator: validateName, trigger: "blur" }],
        registerPass: [{ validator: validatePass, trigger: "blur" }]
      },
      //   控制显示
      isShow: 1
    };
  },
  created() {},
  methods: {
    //   登录验证
    login() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          login({
            phone: this.loginFrom.loginName,
            pass: this.loginFrom.loginPass
          })
            .then(res => {
              if (JSON.stringify(res) === "{}") {
                this.$message.error("手机号或者密码不正确");
              } else {
                // 将用户数据存储带本地存储中
                let user = JSON.stringify(res.data);
                localStorage.setItem("admin", user);
                // 跳转到首页
                this.$router.push("/");
              }
            })
            .catch(err => {
              console.error(err);
              this.$message.error("异常错误");
            });
        } else {
          console.error("error submit!!");
        }
      });
    },
    //注册
    register() {
      this.$refs["registerRuleForm"].validate(valid => {
        if (valid) {
          this.$notify({
            title: "成功",
            message: "您的注册申请已提交，请联系管理员",
            type: "success"
          });
        } else {
          console.error("error submit!!");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
