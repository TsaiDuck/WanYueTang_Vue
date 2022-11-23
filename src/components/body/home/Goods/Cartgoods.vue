<template>
  <div class="cartGoods">
    <input type="checkbox" name="" id="a" :isChecked="isChecked" />
    <div class="cartGoods-img">
      <label for="a"><img :src="imgPath" alt="" /></label>
    </div>
    <span class="cartGoods-info">{{ goodInfo }}</span>
    <span class="cartGoods-price">￥{{ price }}</span>
    <div class="cartGoods-count">
      <button class="cartGoods-count-btn">-</button>
      <span class="cartGoods-count-counter">{{ count }}</span>
      <button class="cartGoods-count-btn">+</button>
    </div>
    <span class="cartGoods-subtotal">￥{{ subTotal }}</span>
    <a href="javascript:;">移除该商品</a>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      default: false,
      type: Boolean
    },
    imgPath: {
      default: '',
      type: String
    },
    goodInfo: {
      default: '',
      type: String
    },
    price: {
      default: 0,
      type: Number
    },
    count: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      subTotal: this.price * this.count
    }
  }
}
</script>

<style lang="less" scoped>
.cartGoods {
  width: 1000px;
  // background-color: skyblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px auto;
  &:hover {
    background-color: #efefef;
  }
  .cartGoods-img {
    img {
      width: 200px;
      height: 200px;
    }
  }
  .cartGoods-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    .cartGoods-count-btn {
      width: 30px;
      height: 30px;
      font-size: 20px;
    }
    .cartGoods-count-counter {
      width: 30px;
      text-align: center;
      margin: 0 5px;
      font-size: 16px;
    }
  }
  .cartGoods-info {
    width: 150px;
    height: 60px;
    overflow: visible;
  }
  .cartGoods-price {
    width: 50px;
  }
  .cartGoods-subtotal {
    width: 50px;
    color: red;
  }
  a {
    color: darkgreen;
    text-decoration: none;
  }
}
</style>
