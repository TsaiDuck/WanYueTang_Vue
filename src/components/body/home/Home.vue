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
          <DailyGoods v-for="item in dayStock" :id="item.drugid" :key="item.drugid" />
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
          <Homestock
            :goodsId="1"
            :goodsImg="require('@/images/test/img3.jpeg')"
            :goodsName="'999感冒灵'"
            :goodsEffect="'风寒感冒'"
            :goodsPrice="20"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '@/components/body/home/Slideshow/Slideshow.vue'
import DailyGoods from '@/components/body/home/Goods/Dailygoods.vue'
import Homestock from '@/components/body/home/Goods/Homestock.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  mounted() {
    this.getData()
    this.dayStockData()
  },
  components: {
    Slideshow,
    DailyGoods,
    Homestock
  },
  methods: {
    ...mapMutations(['updateDrug']),
    // 获取所有信息
    getData() {
      // 如果session里面有数据，则结束该函数
      if (this.drugState) return (this.pageLoading = false)
      // 发送ajax
      this.$http({
        method: 'GET',
        url: '/drug/list'
      })
        .then(({ data: res }) => {
          if (res.code === '200') {
            this.updateDrug(res.data)
            location.reload()
            this.pageLoading = false
          } else if (res.code === '-1') {
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
    // 筛选 每日推荐 信息，并返回药品 id 给 每日推荐组件，在上边 v-for 中传值
    dayStockData() {
      this.dayStock = this.drug.filter((item) => item.keshi === '乙肝').filter((item) => item.price > 68)
    }
  },
  computed: {
    // drugState 是判断是否已经获取到了药品信息
    // drug 是药品信息数组
    ...mapState(['drugState', 'drug'])
  },
  data() {
    return {
      // 每日推荐的药品数组
      dayStock: [],
      // 页面加载状态，在ajax请求结束后会结束加载
      pageLoading: true
    }
  }
}
</script>

<style lang="less" scoped>
.body-home-content {
  width: 1100px;
  margin: 10px auto;
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
}
</style>
