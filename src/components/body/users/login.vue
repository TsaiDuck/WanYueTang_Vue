<template>
  <div class="body-login">
    <!-- 顶上的logo及文字提示 -->
    <div class="body-login-logo">
      <img src="../../../images/logos/黄月.png" height="100%" alt="" />
      <span>网上药店登录系统</span>
    </div>
    <!-- 登录页面主体 -->
    <div class="body-login-main">
      <!-- 背景图片 -->
      <div class="body-login-main-img">
        <img src="../../../images/test/img3.jpeg" alt="" />
      </div>
      <!-- form 表单 -->
      <div class="body-login-main-form">
        <el-form label-position="left" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.userPassword"></el-input>
          </el-form-item>
          <center><el-button style="width: 125px" @click="doLogin">登录</el-button></center>
        </el-form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        userName: '',
        userPassword: ''
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    async doLogin() {
      if (this.formLabelAlign.userName === '' || this.formLabelAlign.userPassword === '')
        return alert('请输入用户名和密码')
      this.login({ userName: 'Ding' })
      // 发送 Ajax 查询用户名与密码是否正确
      this.$http
        .get('/api/doLogin', {
          username: this.userName,
          userPassword: this.userPassword
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.body-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 800px;
  margin: 20px auto;
  .body-login-logo {
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
    color: darkgreen;
  }
  .body-login-main {
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  .body-login-main-img {
    img {
      width: 960px;
      height: 500px;
      position: absolute;
      z-index: -1;
      top: -80px;
      left: -180px;
      opacity: 0.3;
    }
  }
}
</style>
