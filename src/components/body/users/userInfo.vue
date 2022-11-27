<template>
  <div class="userInfo">
    <div class="userInfo-content">
      <el-form :label-position="labelPosition" :disabled="unchangeable" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="formLabelAlign.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="formLabelAlign.birth" type="date" placeholder="选择日期"> </el-date-picker>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formLabelAlign.email" @change="checkEmail"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="formLabelAlign.address"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="update">修改我的信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      unchangeable: true,
      formLabelAlign: {
        name: '',
        phone: '',
        gender: '',
        email: '',
        address: '',
        birth: ''
      }
    }
  },
  methods: {
    update() {
      this.$prompt('请输入您的密码以确认是本人', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
          this.unchangeable = false
        })
    },
    checkEmail() {
      const checker =
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      this.$refs['formLabelAlign'].validateField('email', (errorMessage) => {
        console.log(errorMessage)

        let valid = errorMessage == '' ? true : false

        console.log(valid) // true/false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.userInfo {
  width: 600px;
  height: 400px;
  margin: 30px 0px 30px 30px;
  .userInfo-content {
    width: 600px;
    margin: 10px auto;
  }
}
</style>
