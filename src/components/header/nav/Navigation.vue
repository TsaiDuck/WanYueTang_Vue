<template>
  <div class="nav">
    <!-- logo 图标 -->
    <div class="nav-img">
      <LogoYellowMoon></LogoYellowMoon>
    </div>
    <!-- 导航栏内容 -->
    <div class="nav-body">
      <ul class="nav-body-ul" ref="nav_body">
        <li><a :class="{ active: hashPath === '/home' }" href="#/home">首页</a></li>
        <li><a :class="{ active: hashPath === '/fever' }" href="#/fever">发热科</a></li>
        <li><a :class="{ active: hashPath === '/digestion' }" href="#/digestion">消化内科</a></li>
        <li><a :class="{ active: hashPath === '/OGDepartment' }" href="#/OGDepartment">妇产科</a></li>
        <li><a :class="{ active: hashPath === '/andrology' }" href="#/andrology">乙肝</a></li>
      </ul>
    </div>
    <!-- 搜索框 -->
    <div class="nav-select">
      <input class="nav-select-search" type="text" name="" id="" />
      <b class="el-icon-search nav-select-icon"></b>
    </div>
    <!-- 登陆注册内容 -->
    <div class="nav-user">
      <div class="nav-user-unLogin" v-if="!user.flag">
        <a href="#/login" class="nav-user-login">登录</a>
        &emsp;<b class="el-icon-user-solid">&emsp;&nbsp;</b>
        <a href="#/register" class="nav-user-register">注册</a>
      </div>
      <div class="nav-user-isLogin" v-else>
        <span>{{ user.userName }}</span>
        <b class="el-icon-user nav-user-"></b>
      </div>
    </div>
  </div>
</template>

<script>
import LogoYellowMoon from '@/components/header/logo/logo.vue'
import { mapState } from 'vuex'
export default {
  name: 'Navigation',
  components: {
    LogoYellowMoon
  },
  data() {
    return {
      hashPath: this.$route.path
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function (val) {
        this.hashPath = val.path
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.nav-img {
  width: 100px;
  height: 100px;
}
.nav-user {
  width: 124px;
  a {
    text-decoration: none;
    color: #000;
  }
}
.nav-body {
  height: 100px;
  .nav-body-ul {
    margin: 0px;
    li {
      float: left;
      list-style: none;
      a {
        text-decoration: none;
        display: block;
        padding: 36px 35px;
        font-size: 20px;
        cursor: pointer;
        line-height: -20px;
        color: #000;
      }
      .active {
        background-color: darkgreen;
        color: #fff;
      }
    }
    li:hover {
      background-color: darkgreen;
      a {
        color: #fff;
      }
    }
  }
}
.nav-select {
  position: relative;
  .nav-select-search {
    width: 300px;
    height: 30px;
    border: 1px solid black;
    font-size: 16px;
    border-radius: 2em;
    text-indent: 15px;
    outline-color: darkgreen;
  }
  .nav-select-icon {
    position: absolute;
    top: 10px;
    right: 15px;
  }
}
</style>
