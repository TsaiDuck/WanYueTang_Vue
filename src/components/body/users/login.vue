<template>
  <div class="body-login">
    <!-- 顶上的logo及文字提示 -->
    <div class="body-login-logo">
      <img src="../../../images/logos/黄月.png" height="100%" alt="" />
      <span>网上药店登录系统</span>
    </div>
    <!-- 登录页面主体 -->
    <div class="body-login-main" v-loading="loading">
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
      },
      loading: false
    }
  },
  methods: {
    ...mapMutations(['login']),
    open(title, msg, btn) {
      this.$alert(msg, title, {
        confirmButtonText: btn
      })
    },
    doLogin() {
      // 如果输入框内容为空，则返回提示
      if (this.formLabelAlign.userName === '' || this.formLabelAlign.userPassword === '')
        return this.open('登陆失败', '请输入用户名和密码', '确定')
      // 把输入内容封装成一个对象
      const userInfo = {
        name: this.formLabelAlign.userName,
        pwd: this.formLabelAlign.userPassword
      }
      // 加载器
      this.loading = true
      // 发送 Ajax 查询用户名与密码是否正确
      this.$http({
        method: 'POST',
        url: '/user/login',
        data: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .then(({ data: res }) => {
          // 解除加载中
          this.loading = false
          // 登录成功
          if (res.success) {
            this.open('登录成功！', `${res.data.name}欢迎您`, '确定')
            this.login({
              name: res.data.name,
              pwd: res.data.pwd,
              id: res.data.id,
              sex: res.data.sex,
              phone: res.data.phone,
              userage: res.data.userage,
              birth: res.data.birth,
              email: res.data.email,
              address: res.data.address
            })
            this.getCart()
            this.$router.push('/Home')
          } else if (!res.success) {
            this.open('登陆失败', '用户名或密码错误', '取消')
          } else this.open('登陆失败', '服务器发生问题了', '确定')
          // 登录失败
        })
        .catch((err) => {
          this.loading = false
          this.open(err.name, err.message, '取消')
        })
    },
    getCart() {
      this.$http({
        method: 'GET',
        url: `/cart/list?userid=${this.user.userId}`
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.$store.commit('updateCart', res.data)
          } else {
          }
        })
        .catch((err) => {
          this.$alert(err.message, err.name, {
            confirmButtonText: '取消'
          })
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
