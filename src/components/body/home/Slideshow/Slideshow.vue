<template>
  <!--<div>this is home</div>-->
  <div class="showImg">
    <!--轮播图片-->
    <img
      @mouseover="changeInterval(true)"
      @mouseleave="changeInterval(false)"
      @click="into(item.url)"
      v-for="item in imgArr"
      :key="item.id"
      :src="item.link"
      alt=""
      v-show="item.id === currentIndex"
    />
    <!--左侧按钮-->
    <div
      @click="clickIcon('left')"
      class="iconDiv icon-left"
      @mouseover="changeInterval(true)"
      @mouseleave="changeInterval(false)"
    >
      <i class="el-icon-arrow-left"></i>
    </div>
    <!--右侧按钮-->
    <div
      @click="clickIcon('right')"
      class="iconDiv icon-right"
      @mouseover="changeInterval(true)"
      @mouseleave="changeInterval(false)"
    >
      <i class="el-icon-arrow-right"></i>
    </div>
    <!--控制圆点-->
    <div class="banner-circle">
      <ul>
        <li
          @click="changeImg(item.id)"
          v-for="item in imgArr"
          :key="item.id"
          :class="item.id === currentIndex ? 'active' : ''"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, //当前所在图片下标
      timer: null, //定时轮询
      imgArr: [
        {
          id: 0,
          link: require('@/images/test/img1.jpg'),
          url: '/register'
        },
        {
          id: 1,
          link: require('@/images/test/img2.jpg'),
          url: '/login'
        },
        {
          id: 2,
          link: require('@/images/test/img1.jpg'),
          url: '/home'
        },
        {
          id: 3,
          link: require('@/images/test/img2.jpg'),
          url: '/home'
        }
      ]
    }
  },
  methods: {
    //跳转页面
    into(val) {
      this.$router.push(val)
    },
    //开启定时器
    startInterval() {
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.currentIndex++
        if (this.currentIndex > this.imgArr.length - 1) {
          this.currentIndex = 0
        }
      }, 3000)
    },
    // 点击左右箭头
    clickIcon(val) {
      if (val === 'right') {
        this.currentIndex++
        if (this.currentIndex === this.imgArr.length) {
          this.currentIndex = 0
        }
      } else {
        if (this.currentIndex === 0) {
          this.currentIndex = this.imgArr.length
        }
        this.currentIndex--
      }
    },
    // 点击控制圆点
    changeImg(index) {
      this.currentIndex = index
    },
    //鼠标移入移出控制
    changeInterval(val) {
      if (val) {
        clearInterval(this.timer)
      } else {
        this.startInterval()
      }
    }
  },
  //进入页面后启动定时轮询
  mounted() {
    this.startInterval()
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
.showImg {
  position: relative;
  width: 85%;
  height: 530px;
  margin: 0 auto;
  overflow: hidden;

  /* 轮播图片 */
  img {
    width: 100%;
    height: 100%;
  }
}

/* 箭头图标 */
.iconDiv {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 50px;
  background-color: transparent;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
}
.iconDiv:hover {
  background-color: rgba(125, 125, 125, 0.8);
  /deep/ i {
    color: rgba(255, 255, 255, 0.8);
  }
}
.icon-left {
  left: 10px;
}
.icon-right {
  right: 10px;
}

/* 控制圆点 */
.banner-circle {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;

  ul {
    margin: 0 50px;
    height: 100%;
    text-align: right;
  }

  li {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 5px;
    border-radius: 7px;
    background-color: rgba(125, 125, 125, 0.8);
    cursor: pointer;
  }
}
.active {
  background-color: black !important;
}
</style>
