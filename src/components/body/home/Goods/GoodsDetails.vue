<template>
  <div class="goodsDetails">
    <!--回到顶部-->
    <el-backtop style="height: 30px; width: 30px"></el-backtop>
    <!--{{ $route.params.id }}-->
    <div class="goodsDetails-header">
      <div class="left">
        <img :src="require('../../home' + drugInfo.photo)" alt="" />
        <span class="imgtip">温馨提醒：商品包装因厂家更换频繁，如有不符请以实物为准。</span>
      </div>

      <div class="right">
        <h1 class="title">{{ drugInfo.name }}</h1>
        <hr style="border: 1px #e5e5e5 dashed" />
        <div class="info">
          <table>
            <tr>
              <td>单<em></em>价</td>
              <td class="td1">￥{{ drugInfo.price }}</td>
            </tr>
            <tr>
              <td>通用名称</td>
              <td class="td2">{{ drugInfo.name }}</td>
            </tr>
            <tr>
              <td>包装规格</td>
              <td class="td2">{{ drugInfo.specification }}</td>
            </tr>
            <tr>
              <td>剂<em></em>型</td>
              <td class="td2">{{ drugInfo.formulations }}</td>
            </tr>
            <tr>
              <td>有<em class="em2"></em>效<em class="em2"></em>期</td>
              <td class="td2">{{ drugInfo.shelflife }}</td>
            </tr>
            <tr>
              <td>适<em class="em2"></em>应<em class="em2"></em>症</td>
              <td class="td2">
                {{ drugInfo.details }}
              </td>
            </tr>
            <tr>
              <td>数<em></em>量</td>
              <td class="td2">
                <el-button @click="sub" style="width: 30px; height: 30px; font-size: 16px; line-height: 30px">
                  <i class="el-icon-minus"></i>
                </el-button>
                <span style="padding: 0px 10px">{{ count }}</span>
                <el-button @click="add" style="width: 30px; height: 30px; font-size: 16px; line-height: 30px">
                  <i class="el-icon-plus"></i>
                </el-button>
              </td>
            </tr>
          </table>
        </div>
        <div class="button">
          <el-button type="danger" class="el-button2">购买</el-button>
          <el-button
            type="primary"
            class="el-button2"
            @click="addCart"
            v-loading="loading"
            element-loading-text="正在添加"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>

    <div class="bottom">
      <h1>药品说明书</h1>
      <hr style="border: 1px #eeeeee solid; margin: 10px 0" />
      <div class="book">
        <table class="book-table">
          <tr>
            <td class="td1">药品名称：</td>
            <td class="td2">
              {{ drugInfo.name }}
            </td>
          </tr>
          <tr>
            <td class="td1">剂型：</td>
            <td class="td2">{{ drugInfo.formulations }}</td>
          </tr>
          <tr>
            <td class="td1">规格：</td>
            <td class="td2">{{ drugInfo.specification }}</td>
          </tr>
          <tr>
            <td class="td1">用法用量：</td>
            <td class="td2">{{ bookInfo.dosage }}</td>
          </tr>
          <tr>
            <td class="td1">功能主治：</td>
            <td class="td2">{{ drugInfo.function }}</td>
          </tr>
          <tr>
            <td class="td1">不良效果：</td>
            <td class="td2">{{ drugInfo.instructionbookid }}</td>
          </tr>
          <tr>
            <td class="td1">有效期：</td>
            <td class="td2">{{ drugInfo.shelflife }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GoodsDetails',
  created() {
    this.getInfo()
    document.body.scrollIntoView()
  },
  data() {
    return {
      count: 1,
      drugID: this.$route.params.id,
      drugInfo: {},
      bookInfo: {},
      loading: false
    }
  },
  methods: {
    getInfo() {
      this.drugInfo = this.drug.filter((item) => item.id == this.drugID)[0]
      this.bookInfo = this.book.filter((item) => item.drugId == this.drugID)[0]
    },
    judge() {
      if (this.count == '' || this.count <= 0) this.count = 1
      if (this.count >= this.goodNum) this.count = this.goodNum
    },
    //只允许输入数字
    UpNumber(e) {
      e.target.value = e.target.value.replace(/[^\d]/g, '')
    },
    add() {
      this.count += 1
    },
    sub() {
      if (this.count > 1) {
        this.count -= 1
      }
    },
    addCart() {
      // 封装 JSON
      const cartInfo = {
        userId: this.user.userId,
        drugId: this.drugID,
        count: this.count
      }
      // 加载器
      this.loading = true
      // 筛选出购物车里已有的药品
      const cartDrug = []
      if (this.cartState) {
        this.cart.forEach((item) => {
          if (!cartDrug.includes(item.drugId)) {
            cartDrug.push(item.drugId)
          }
        })
      }
      // ajax
      this.$http({
        method: 'post',
        url: cartDrug.includes(this.drugInfo.id) ? '/cart/amount' : '/cart/addcart',
        data: JSON.stringify(cartInfo),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .then(({ data: res }) => {
          // 解除加载器
          this.loading = false
          if (res.success) {
            this.$alert('', res.data, {
              confirmButtonText: '确定'
            })
            this.getCart()
          }
        })
        .catch((err) => {
          // 解除加载器
          this.loading = false
          if (err.code === 'ECONNABORTED') {
            this.$alert('请重新添加', '服务器请求超时', {
              confirmButtonText: '确定'
            })
          } else {
            this.$alert(err.message, err.name, {
              confirmButtonText: '取消'
            })
          }
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
    }
  },
  computed: {
    ...mapState(['drug', 'book', 'user', 'cartState', 'cart'])
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.goodsDetails {
  height: auto;
  width: 90%;
  margin: 30px auto;
  text-align: left;
  clear: both;
  zoom: 1;
  overflow: hidden;
  .goodsDetails-header {
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      float: left;
      width: 400px;
      border: 1px solid #e5e5e5;
      display: block;
      position: relative;
      img {
        width: 390px;
        height: 390px;
        padding: 3px;
      }
      .imgtip {
        bottom: 5px;
        color: #999;
        left: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
    }
    .right {
      position: relative;
      float: left;
      margin-left: 50px;
      width: 650px;

      .title {
        margin-bottom: 20px;
        padding: 0 20px 0 0;
        font-size: 25px;
        overflow: hidden;
        width: 600px;
        white-space: nowrap;
        font-weight: normal;
      }
      .info {
        table {
          //float: left;
          border-spacing: 26px 26px;
          list-style-type: none;
          font-size: 16px;
          color: #999999;
          tr {
            padding: 13px 0;
            td {
              width: 80px;
            }
            .td1 {
              color: red;
              font-size: 26px;
              font-weight: bold;
            }
            .td2 {
              width: 500px;
              color: black;
              font-size: 16px;
            }
            input {
              width: 60px;
              height: 26px;
              margin: 0 10px;
              border: 1px solid #a6a5aa;
              padding: 2px;
            }
            em {
              padding-left: 32px;
            }
            .em2 {
              padding-left: 8px;
            }
          }
        }
      }
      .button {
        text-align: center;
        height: 60px;
        line-height: 60px;
        .el-button2 {
          width: 150px;
          height: 50px;
          font-size: 20px;
        }
      }
    }
  }

  .bottom {
    float: left;
    margin-top: 30px;
    padding: 30px;
    border: 1px solid #e5e5e5;
    width: 93%;
    h1 {
      font-weight: normal;
      font-size: 25px;
    }
    .book {
      .book-table {
        margin: 20px auto;
        width: 1000px;
        border: 1px solid #e5e5e5;
        border-collapse: collapse;
        color: #333;
        font-size: 16px;
        td {
          height: 30px;
          line-height: 30px;
          border: 1px solid #e5e5e5;
          padding: 20px;
        }
        .td1 {
          width: 300px;
          text-align: center;
        }
        .td2 {
          width: 600px;
          text-align: left;
        }
      }
    }
  }
}
</style>
