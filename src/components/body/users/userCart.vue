<template>
  <div class="userCart">
    <div class="userCart-title">
      <b class="el-icon-shopping-cart-2 userCart-title-logo"></b>
      &nbsp;
      <span class="userCart-title-tip">万月堂购物车</span>
    </div>
    <!-- 导航栏 -->
    <div class="userCart-nav">
      <div class="userCart-nav-all">
        <input type="checkbox" name="" id="userCart-nav-all" />
        <label for="userCart-nav-all">全选</label>
      </div>
      <span class="userCart-nav-info">商品信息</span>
      <span class="userCart-nav-price">单价</span>
      <span class="userCart-nav-count">数量</span>
      <span class="userCart-nav-subtotal">小计</span>
    </div>
    <!-- 购物车内容 -->
    <div class="userCart-content">
      <Cartgoods
        :isChecked="true"
        :imgPath="require('@/images/test/img4.jpg')"
        :goodInfo="'健胃消食片'"
        :price="10"
        :count="2"
      ></Cartgoods>
    </div>
  </div>
</template>

<script>
import Cartgoods from '@/components/body/home/Goods/Cartgoods.vue'
export default {
  components: {
    Cartgoods
  }
}
</script>

<style lang="less" scoped>
.userCart {
  margin: 10px auto;
  width: 1000px;
  .userCart-title {
    width: 300px;
    margin: 25px auto;
    padding-bottom: 30px;
    font-size: 35px;
    color: darkgreen;
  }
  .userCart-nav {
    width: 820px;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: darkgreen;
    .userCart-nav-info {
      width: 300px;
    }
    .userCart-nav-price {
      text-align: right;
      width: 50px;
    }
    .userCart-nav-count {
      text-align: right;
      width: 50px;
    }
    .userCart-nav-subtotal {
      width: 50px;
    }
  }
}
</style>
