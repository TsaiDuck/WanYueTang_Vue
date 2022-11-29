<template>
  <div class="cartGoods">
    <input type="checkbox" name="" :id="id" :checked="isChecked" @change="stateChange" />
    <div class="cartGoods-img">
      <label :for="id"><img :src="require('../../home' + drugInfo.photo)" alt="" /></label>
    </div>
    <span class="cartGoods-info">{{ drugInfo.name }}</span>
    <span class="cartGoods-price">￥{{ drugInfo.price }}</span>
    <div class="cartGoods-count">
      <button class="cartGoods-count-btn" @click="changeCount('sub')">-</button>
      <span class="cartGoods-count-counter">{{ count }}</span>
      <button class="cartGoods-count-btn" @click="changeCount('add')">+</button>
    </div>
    <span class="cartGoods-subtotal">￥{{ (drugInfo.price * count).toFixed(2) }}</span>
    <a href="javascript:;">移除该商品</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: { type: Number },
    isChecked: { type: Boolean, default: false },
    count: { type: Number }
  },
  data() {
    return {
      drugInfo: {}
    }
  },
  methods: {
    getDrugData() {
      this.drugInfo = this.drug.filter((item) => item.id === this.id)[0]
    },
    changeCount(fun) {
      if (fun === 'sub' && this.count === 1) return
      const obj = {
        userId: this.cart.filter((item) => item.drugId === this.id)[0].userId,
        drugId: this.id,
        count: fun === 'add' ? this.count + 1 : this.count - 1
      }
      this.$http({
        method: 'POST',
        url: '/cart/amount',
        data: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.getCart()
            setTimeout(() => {
              this.resetSetItem('watchStorage', Math.random())
            }, 100)
          }
        })
        .catch((err) => {
          if (err.code === 'ECONNABORTED') {
            this.$alert('请刷新页面重试', '服务器请求超时', {
              confirmButtonText: '确定'
            })
          } else console.log(err)
        })
    },
    getCart() {
      this.$http({
        method: 'GET',
        url: `/cart/list?userid=${this.user.userId}`
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.$store.commit('updateCart', res.data)
          } else {
          }
        })
        .catch((err) => {
          this.$alert(err.message, err.name, {
            confirmButtonText: '取消'
          })
        })
    },
    stateChange(e) {
      const newState = e.target.checked
      // 触发自定义事件
      this.$emit('state-change', { id: this.id, value: newState })
    }
  },
  computed: {
    ...mapState(['drug', 'cart', 'user'])
  },
  created() {
    this.getDrugData()
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
    overflow: hidden;
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
