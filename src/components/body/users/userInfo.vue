<template>
  <div class="userInfo">
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
    </el-form>
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
        gender: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.userInfo {
  width: 400px;
  margin: 30px 0px 30px 30px;
}
</style>
