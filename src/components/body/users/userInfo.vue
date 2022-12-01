<template>
  <div class="userInfo">
    <div class="userInfo-content">
      <el-form
        :label-position="labelPosition"
        :model="formLabelAlign"
        :disabled="true"
        :rules="rules"
        ref="formLabelAlign"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLabelAlign.name" ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formLabelAlign.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formLabelAlign.age"></el-input>
        </el-form-item>
      </el-form>

      <el-form
          :label-position="labelPosition"
          :model="formLabelAlign"
          :disabled="unchangeable"
          :rules="rules"
          ref="formLabelAlign"
          label-width="80px"
      >
        <el-form-item label="生日" prop="birth">
          <el-date-picker v-model="formLabelAlign.birth" type="date" placeholder="选择日期" @change="getAge" value-format="yyyy-MM-dd"> </el-date-picker>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-form-item label="收货地址" prop="address">
          <el-input v-model="formLabelAlign.address"></el-input>
        </el-form-item>
      </el-form>
      <div class="userInfo-content-button">
        <el-button type="primary" @click="update">修改我的信息</el-button>
        <el-button type="primary" @click="save" :disabled="unchangeable">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      var checker =
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      if (!checker.test(value)) {
        callback(new Error('请输入正确的邮箱！'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      unchangeable: true,
      //表单内容
      formLabelAlign: {
        name: '',
        phone: '',
        sex: '',
        email: '',
        address: '',
        birth: '',
        age: ''
      },
      rules: {
        email: [{ validator: validateEmail, trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    show(){
      this.formLabelAlign.name = this.user.userName,
      this.formLabelAlign.phone = this.user.userPhone,
      this.formLabelAlign.sex = this.user.userGender,
      this.formLabelAlign.age = this.user.userAge,
      this.formLabelAlign.birth = this.user.userBirth,
      this.formLabelAlign.email = this.user.userEmail,
      this.formLabelAlign.address = this.user.userAddress
    },
    save(){
      this.$refs.formLabelAlign.validate((valid) => {
        if(valid){
          const userInfo = {
            id: this.user.userId,
            userage: this.formLabelAlign.age,
            birth: this.formLabelAlign.birth,
            address: this.formLabelAlign.address,
            email: this.formLabelAlign.email
          }
          console.log(userInfo)
          this.$http({
            method: 'POST',
            url: '/user/update',
            data: JSON.stringify(userInfo),
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }          })
              .then(({data: res}) => {
                console.log(res)
                if(res.success){
                  this.login({
                    name: this.user.userName,
                    pwd: this.user.userPwd,
                    id: userInfo.id,
                    sex: this.user.userGender,
                    phone: this.user.userPhone,
                    userage: userInfo.userage,
                    birth: userInfo.birth,
                    email: userInfo.email,
                    address: userInfo.address
                  })
                  this.$message("保存成功")
                  this.unchangeable = true
                }
              })
        }
      })
    },
    getAge(){
      let birthdays = new Date(this.formLabelAlign.birth)
      let date = new Date()
      let age = date.getFullYear()-birthdays.getFullYear()-(date.getMonth()<birthdays.getMonth()) ||
          (date.getMonth() == birthdays.getMonth() && date.getDay() < birthdays.getDay() ? 1 : 0)
      this.formLabelAlign.age = age
    },
    update() {
      this.$prompt('请输入您的密码以确认是本人', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'password',
        inputValidator: (value) => {
          if (value === this.user.userPwd) return true
          return '密码错误'
        }
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '请完善您的信息: '
          })
          this.unchangeable = false
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.show()
  }
}
</script>

<style lang="less" scoped>
.userInfo {
  width: 800px;
  height: 480px;
  margin: 30px 0px 30px 30px;
  .userInfo-content {
    width: 600px;
    margin: 10px auto;
    .userInfo-content-button{
      text-align: center;
    }
  }
}
</style>
