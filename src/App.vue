<template>
  <div id="app">
    <!-- 导航栏 -->
    <div class="nav"></div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <Navigation></Navigation>
        </div>
      </el-col>
    </el-row>
    <!-- 内容区 -->
    <div class="body">
      <router-view></router-view>
    </div>
    <!-- 尾部区 -->
    <div class="footer"></div>
  </div>
</template>

<script>
import Navigation from '@/components/header/nav/Navigation.vue'
import HomePage from '@/components/body/home/Home.vue'
export default {
  components: {
    Navigation,
    HomePage
  }
}
</script>

<style lang="less">
.nav {
  box-shadow: 0px 2px 0px lightgray;
}
</style>
