<template>
  <div class="body-home" v-loading.fullscreen.lock="pageLoading">
    <!-- 轮播图 -->
    <div class="body-home-slideshow">
      <Slideshow></Slideshow>
    </div>
    <!-- 内容 -->
    <div class="body-home-content">
      <!-- 每日推荐 -->
      <div class="body-home-content-dailyGoods">
        <!-- 头部提示 -->
        <div class="body-home-content-title">
          <span class="el-icon-present"></span>
          &emsp;<span>每日推荐</span>
          <!-- <button @click="dayStockData">test</button> -->
        </div>
        <!-- 每日推荐商品 -->
        <div class="body-home-content-dailyGoods-goods">
          <DailyStock v-for="item in dayStock" :id="item.id" :key="item.id" />
        </div>
      </div>
      <!-- 家中常备 -->
      <div class="body-home-content-homeStock">
        <!-- 头部提示 -->
        <div class="body-home-content-title">
          <span class="el-icon-first-aid-kit"></span>
          &emsp;<span>家中常备</span>
        </div>
        <!-- 家中常备商品 -->
        <div class="body-home-content-homeStock-goods">
          <HomeStock v-for="item in homeStock" :id="item.id" :key="item.id"></HomeStock>
        </div>
      </div>
      <!-- 好药惠选 -->
      <div class="body-home-content-niceGoods">
        <!-- 头部提示 -->
        <div class="body-home-content-title">
          <span class="el-icon-star-off"></span>
          &emsp;<span>好药惠选</span>
        </div>
        <!-- 好药惠选商品 -->
        <div class="body-home-content-niceGoods-goods">
          <NiceStock v-for="item in niceStock" :id="item.id" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '@/components/body/home/Slideshow/Slideshow.vue'
import DailyStock from '@/components/body/home/Goods/Dailystock.vue'
import HomeStock from '@/components/body/home/Goods/Homestock.vue'
import NiceStock from '@/components/body/home/Goods/Nicestock.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  mounted() {
    this.getDrugData()
    this.getBookData()
    this.dayStockData()
    this.homeStockData()
    this.niceStockData()
  },
  components: {
    Slideshow,
    DailyStock,
    HomeStock,
    NiceStock
  },
  methods: {
    ...mapMutations(['updateDrug', 'updateBook']),
    // 获取所有信息
    getDrugData() {
      // 如果session里面有数据，则结束该函数
      if (this.drugState) return (this.pageLoading = false)
      // 发送ajax
      this.$http({
        method: 'GET',
        url: '/drug/getall'
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.updateDrug(res.data)
            location.reload()
            this.pageLoading = false
          } else if (!res.success) {
            this.$alert('请刷新页面重试', '服务器发生错误', {
              confirmButtonText: '确定'
            })
            this.pageLoading = false
          }
        })
        .catch((err) => {
          console.log(err)
          if (err.code === 'ECONNABORTED') {
            this.$alert('请刷新页面重试', '服务器请求超时', {
              confirmButtonText: '确定'
            })
            this.pageLoading = false
          }
        })
    },
    getBookData() {
      if (this.bookState) return (this.pageLoading = false)
      this.$http({
        method: 'GET',
        url: '/instruction-book/getall'
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.updateBook(res.data)
            console.log(res)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 筛选 每日推荐 信息，并返回药品 id 给 每日推荐组件，在上边 v-for 中传值
    dayStockData() {
      this.dayStock = this.drug.filter((item) => item.department === '乙肝').filter((item) => item.price > 68)
    },
    // 筛选 家中常备
    homeStockData() {
      this.homeStock = this.drug.filter((item) => item.price < 30).filter((item) => item.price > 10)
    },
    // 好药惠选
    niceStockData() {
      this.niceStock = this.drug.filter((item) => item.formulations === '胶囊')
    }
  },
  computed: {
    // drugState 是判断是否已经获取到了药品信息
    // drug 是药品信息数组
    ...mapState(['drugState', 'drug', 'bookState', 'book'])
  },
  data() {
    return {
      // 每日推荐的药品数组
      dayStock: [],
      // 家中常备
      homeStock: [],
      // 好药惠选
      niceStock: [],
      // 页面加载状态，在ajax请求结束后会结束加载
      pageLoading: true
    }
  }
}
</script>

<style lang="less" scoped>
.body-home-slideshow {
  margin-bottom: 20px;
}
.body-home-content {
  width: 1100px;
  margin: 10px auto;
  div {
    margin-bottom: 10px;
  }
  .body-home-content-title {
    span {
      color: darkgreen;
      font-size: 22px;
    }
  }
  .body-home-content-dailyGoods-goods {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body-home-content-homeStock-goods {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .body-home-content-niceGoods-goods {
    display: flex;
    // justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    div {
      margin: 0px 10px;
    }
  }
}
</style>
