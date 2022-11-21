<template>
  <div class="body-home">
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
        </div>
        <!-- 每日推荐商品 -->
        <div class="body-home-content-dailyGoods-goods">
          <DailyGoods
            :goodsImg="require('@/images/test/img3.jpeg')"
            :goodsName="'999感冒灵'"
            :goodsEffect="'风寒感冒'"
            :goodsPrice="20"
          />
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

export default {
  components: {
    Slideshow,
    DailyGoods,
    Homestock,
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
}
</style>
