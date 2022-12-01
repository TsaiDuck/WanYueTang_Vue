<template>
  <div class="body-login">
    <!-- 顶上的logo及文字提示 -->
    <div class="body-login-logo">
      <img src="../../../images/logos/黄月.png" height="100%" alt="" />
      <span>网上药店注册系统</span>
    </div>
    <!-- 注册页面主体 -->
    <div class="body-login-main" v-loading="loading">
      <!-- 背景图片 -->
      <div class="body-login-main-img">
        <img src="../../../images/test/img3.jpeg" alt="" />
      </div>
      <!-- form 表单 -->
      <div class="body-login-main-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user_name">
            <el-input v-model="ruleForm.user_name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="user_password">
            <el-input type="password" v-model="ruleForm.user_password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="user_phone">
            <el-input v-model.number="ruleForm.user_phone"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="user_gender">
            <el-radio-group v-model="ruleForm.user_gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <dir></dir>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 判断密码是否为空
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // 判断两次密码是否一致
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.user_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    // 判断手机号是否符合格式
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        var checkPhone = /^1[34578]\d{9}$/
        if (!checkPhone.test(value)) {
          callback(new Error('请输入正确的手机号！'))
        }
        callback()
      }
    }
    return {
      // form 表单内容
      ruleForm: {
        user_name: '',
        user_password: '',
        checkPass: '',
        user_gender: '',
        user_phone: ''
      },
      // 判断规则
      rules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        user_password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 18, message: '长度再 6 - 18 个字符', trigger: 'blur' }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        user_gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
        user_phone: [{ validator: validatePhone, trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const userInfo = {
            name: this.ruleForm.user_name,
            pwd: this.ruleForm.user_password,
            phone: this.ruleForm.user_phone,
            sex: this.ruleForm.user_gender
          }
          // 加载器
          this.loading = true
          // ajax
          this.$http({
            method: 'POST',
            url: '/user/register',
            data: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
          })
            .then(({ data: res }) => {
              // 解除加载中
              this.loading = false
              // 判断返回值
              if (res.success) {
                this.open('注册成功!', '现在可以登录辣', '确定')
                this.$router.push('/login')
              } else {
                this.open('注册失败', '该用户名已被占用', '确定')
              }
            })
            .catch((err) => {
              // 解除加载中
              this.loading = false
              if (err.code === 'ECONNABORTED') {
                this.$alert('请重新注册', '服务器请求超时', {
                  confirmButtonText: '确定'
                })
              } else {
                this.$alert(err.message, err.name, {
                  confirmButtonText: '取消'
                })
              }
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    open(title, msg, btn) {
      this.$alert(msg, title, {
        confirmButtonText: btn
      })
    }
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
