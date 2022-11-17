<template>
  <div id="app">
    <!-- 导航栏 -->
    <div class="nav">
      <Navigation></Navigation>
    </div>
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
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="less">
.nav {
  box-shadow: 0px 2px 0px lightgray;
}
</style>
