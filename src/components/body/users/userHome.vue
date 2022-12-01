<template>
  <div class="userHome">
    <!-- 侧边栏 -->
    <div class="userHome-sideBar">
      <div class="userHome-sideBar-head"><b class="el-icon-user-solid"></b></div>
      <span>{{ user.userName }}</span>
      <div class="userHome-sideBar-list">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li @click="linkTo('/userHome/userInfo')">我的信息</li>
          <li></li>
          <li></li>
          <li @click="linkTo('/userCart')">我的购物车</li>
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 内容栏 -->
    <div class="userHome-content"><router-view></router-view></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    linkTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.userHome {
  width: 1200px;
  // background-color: red;
  // height: 100px;
  margin: 10px auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  .userHome-sideBar {
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
      margin: 10px;
    }
    .userHome-sideBar-head {
      b {
        font-size: 30px;
        border: 1px solid black;
        border-radius: 50%;
        padding: 10px;
      }
    }
    .userHome-sideBar-list {
      ul {
        margin: 0px;
        padding: 0px;
        li {
          list-style: none;
          padding: 5px 2px;
          cursor: pointer;
          font-size: 18px;
        }
        li:hover {
          color: darkgreen;
        }
      }
    }
  }
  .userHome-content {
    width: 900px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }
}
</style>
