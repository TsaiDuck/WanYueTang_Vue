<template>
  <div class="body-login">
    <!-- 顶上的logo及文字提示 -->
    <div class="body-login-logo">
      <img src="../../../images/logos/黄月.png" height="100%" alt="" />
      <span>网上药店注册系统</span>
    </div>
    <!-- 注册页面主体 -->
    <div class="body-login-main">
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.user_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        var checkPhone = /^1[34578]\d{9}$/
        if (!checkPhone.test(this.ruleForm.user_phone)) {
          callback(new Error('请输入正确的手机号！'))
        }
        callback()
      }
    }
    return {
      ruleForm: {
        user_name: '',
        user_password: '',
        checkPass: '',
        user_gender: '',
        user_phone: ''
      },
      rules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        user_password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        user_gender: [{ required: true, message: '请选择性别', trigger: 'blur' }],
        user_phone: [{ validator: validatePhone, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
