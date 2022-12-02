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
        <li><a :class="{ active: hashPath === '/classify/fever' }" href="#/classify/fever">发热科</a></li>
        <li><a :class="{ active: hashPath === '/classify/digestion' }" href="#/classify/digestion">消化内科</a></li>
        <li><a :class="{ active: hashPath === '/classify/OGDepartment' }" href="#/classify/OGDepartment">妇产科</a></li>
        <li><a :class="{ active: hashPath === '/classify/andrology' }" href="#/classify/andrology">乙肝专科</a></li>
      </ul>
    </div>
    <!-- 搜索框 -->
    <div class="nav-select">
      <input class="nav-select-search" type="text" name="" id="" v-model="searchValue" @keyup.enter="getSearch"/>
      <b class="el-icon-search nav-select-icon" @click="getSearch"></b>
    </div>
    <!-- 登陆注册内容 -->
    <div class="nav-user">
      <div class="nav-user-unLogin" v-if="!user.isLogin">
        <a href="#/login" class="nav-user-login">登录</a>
        &emsp;<b class="el-icon-user-solid">&emsp;&nbsp;</b>
        <a href="#/register" class="nav-user-register">注册</a>
      </div>
      <div class="nav-user-isLogin" @mouseenter="showUserInfo" @mouseleave="hideUserInfo" v-else>
        <!-- &emsp; -->
        <b class="el-icon-user" :title="user.userName"></b>
        <!-- &nbsp; -->
        <!-- <span>{{ user.userName }}</span> -->
        <div class="nav-user-info" v-if="showFlag">
          <ul>
            <li class="nav-user-info-head">用户：{{ user.userName }}</li>
            <li @click="linkTo('/userHome')">个人主页</li>
            <li @click="linkTo('/userCart')">购物车</li>
            <li @click="userLogout">退出登录</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoYellowMoon from '@/components/header/logo/logo.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  components: {
    LogoYellowMoon
  },
  data() {
    return {
      hashPath: this.$route.path,
      showFlag: false,
      searchValue:'',
      search: [],
      id:''
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
    ...mapState(['user','drug'])
  },
  methods: {
    ...mapMutations(['logout','updateDrug']),
    showUserInfo() {
      this.showFlag = true
    },
    hideUserInfo() {
      this.showFlag = false
    },
    linkTo(path) {
      this.$router.push(path)
    },
    userLogout() {
      this.showFlag = false
      this.logout()
      this.linkTo('/home')
    },
    getSearch() {
      this.linkTo('/search/'+ this.searchValue)
    }
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
  .nav-user-isLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100px;
    overflow: visible;
    b {
      font-size: 24px;
      border: 1px solid black;
      border-radius: 50%;
      padding: 4px;
      // cursor: pointer;
    }
    .nav-user-info {
      position: absolute;
      top: 67px;
      background-color: #fff;
      width: 120px;
      border: 1px solid lightgray;
      border-radius: 10px;
      z-index: 9;
      ul {
        margin: 0px;
        padding: 0px;
        li {
          list-style: none;
          text-align: center;
          display: block;
          width: 120px;
          cursor: pointer;
          border-top: 1px solid lightgray;
          padding: 8px 0px;
        }
        li:hover {
          // background-color: darkgreen;
          color: darkgreen;
        }
        .nav-user-info-head {
          padding: 12px 0px;
          cursor: default;
          border-top: 0px;
        }
        .nav-user-info-head:hover {
          // background-color: #fff;
          color: black;
        }
      }
    }
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
    cursor: pointer;
  }
}
</style>
