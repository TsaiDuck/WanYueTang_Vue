<template>
  <div class="dailyGoods">
    <!-- 图片 -->
    <div class="dailyGoods-img" @click="toDetail()">
      <img :src="require('../../home' + drugInfo.tupian)" alt="" />
    </div>
    <!-- 文字 -->
    <div class="dailyGoods-text" @click="toDetail()">
      <span class="dailyGoods-text-goodsName" :title="drugInfo.drugname">{{ drugInfo.drugname }}</span>
      <!-- 药品作用太长了，不要了 -->
      <!-- <span class="dailyGoods-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span> -->
      <div class="dailyGoods-text-Price">
        <span class="dailyGoods-text-goodsNewPrice">￥{{ (drugInfo.price * 0.8).toFixed(1) }}</span>
        <span class="dailyGoods-text-goodsOldPrice">￥{{ drugInfo.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: {
      type: Number
    }
  },
  computed: {
    ...mapState(['drug', 'drugState'])
  },
  data() {
    return {
      drugInfo: {}
    }
  },
  methods: {
    // 根据传进来的 id 找到药品对象，再把对象的各个属性值渲染到页面
    getDrugInfo() {
      this.drugInfo = this.drug.filter((item) => item.drugid === this.id)[0]
    },
    toDetail() {
      this.$router.push(`/goodsDetails/${this.id}`)
    }
  },
  created() {
    this.getDrugInfo()
  }
}
</script>

<style lang="less" scoped>
.dailyGoods {
  width: 200px;
  height: 300px;
  // background: skyblue;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .dailyGoods-img {
    margin: 5px;
    img {
      width: 190px;
      height: 190px;
      cursor: pointer;
    }
  }
  .dailyGoods-text {
    cursor: pointer;
    width: 150px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      width: 150px;
      text-align: center;
    }
    .dailyGoods-text-goodsName:hover {
      color: darkgreen;
      text-decoration: underline;
    }
    .dailyGoods-text-goodsEffect {
      font-size: 14px;
      margin-top: 2px;
      color: gray;
    }
  }
  .dailyGoods-text-Price {
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    .dailyGoods-text-goodsNewPrice {
      color: red;
      font-size: 18px;
    }
    .dailyGoods-text-goodsOldPrice {
      font-size: 13px;
      text-decoration: line-through;
      line-height: 28px;
    }
  }
}
</style>
>
