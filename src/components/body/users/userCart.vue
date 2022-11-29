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
      <Cartgoods v-for="item in cart" :key="item.index" :id="item.drugId"></Cartgoods>
    </div>
    <!-- 结算 -->
    <div class="userCart-aggregate">
      <div class="userCart-aggregate-count">
        <span>已选择</span>
        <span class="userCart-aggregate-count-total">2</span>
        <span>件商品</span>
      </div>
      <div class="userCart-aggregate-total">
        <span>总计</span>
        <span class="userCart-aggregate-total-price">￥100</span>
      </div>
      <button class="userCart-aggregate-btn">结算</button>
    </div>
  </div>
</template>

<script>
import Cartgoods from '@/components/body/home/Goods/Cartgoods.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Cartgoods
  },
  computed: {
    ...mapState(['cart', 'cartState'])
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
  .userCart-aggregate {
    // background: skyblue;
    width: 380px;
    float: right;
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .userCart-aggregate-count {
      .userCart-aggregate-count-total {
        color: red;
        margin: 0px 3px;
      }
    }
    .userCart-aggregate-total {
      .userCart-aggregate-total-price {
        color: red;
      }
    }
    .userCart-aggregate-btn {
      width: 100px;
      height: 40px;
      background-color: red;
      color: white;
      border: 0px;
      border-radius: 2em;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
