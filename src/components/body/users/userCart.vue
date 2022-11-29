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
        <input type="checkbox" name="" id="userCart-nav-all" @change="getFullState" :checked="fullState" />
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
        v-for="item in cartList"
        :key="item.index"
        :id="item.drugId"
        :count="item.count"
        :isChecked="item.state"
        @state-change="getNewState"
      ></Cartgoods>
    </div>
    <!-- 结算 -->
    <div class="userCart-aggregate">
      <div class="userCart-aggregate-count">
        <span>已选择</span>
        <span class="userCart-aggregate-count-total">{{ amount }}</span>
        <span>件商品</span>
      </div>
      <div class="userCart-aggregate-total">
        <span>总计</span>
        <span class="userCart-aggregate-total-price">￥{{ totalPrice }}</span>
      </div>
      <button class="userCart-aggregate-btn" @click="purchase">结算</button>
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
    ...mapState(['cart', 'cartState']),
    fullState() {
      return this.cartList.every((item) => item.state)
    }
  },
  data() {
    return {
      amount: 0,
      totalPrice: 0,
      cartList: []
    }
  },
  methods: {
    // 获取子组件传过来的 checked 状态
    getNewState(e) {
      this.cartList.some((item) => {
        if (item.drugId === e.id) {
          item.state = e.value
          return true
        }
      })
      this.getTotal()
    },
    // 获取购物车列表信息
    geCartList() {
      this.cartList = this.cart
    },
    // 获取复选框选择状态
    getFullState(e) {
      this.cartList.forEach((item) => (item.state = e.target.checked))
    },
    // 总计
    getTotal() {
      this.totalPrice = this.cartList
        .filter((item) => item.state)
        .reduce((total, item) => (total += item.price * item.count), 0)
        .toFixed(1)
      this.amount = this.cartList.filter((item) => item.state).reduce((t, item) => (t += item.count), 0)
    },
    // 结算
    purchase() {
      this.$confirm(`您选择了${this.amount}件商品，总价为${this.totalPrice}，是否确定支付？`, '购物车结算', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success',
        center: true
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '支付成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消支付'
          })
        })
    }
  },
  created() {
    this.geCartList()
    window.addEventListener('setItem', () => {
      this.geCartList()
    })
  }
}
</script>

<style lang="less" scoped>
.userCart {
  margin: 10px auto;
  width: 1000px;
  .userCart-title {
    margin: 25px auto;
    padding: 20px 0px;
    font-size: 35px;
    color: white;
    background-color: darkgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
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
