<template>
  <div class="niceStock">
    <!-- 图片 -->
    <div class="niceStock-img" @click="toDetail()">
      <img :src="require('../../home' + drugInfo.photo)" alt="" />
    </div>
    <!-- 文字 -->
    <div class="niceStock-text" @click="toDetail()">
      <span class="niceStock-text-goodsName" :title="drugInfo.name">{{ drugInfo.name }}</span>
      <span class="niceStock-text-goodsEffect" :title="drugInfo.name">{{ drugInfo.function }}</span>
      <div class="niceStock-text-Price">
        <span class="niceStock-text-goodsNewPrice">￥{{ (drugInfo.price * 0.9).toFixed(1) }}</span>
        <span class="niceStock-text-goodsOldPrice">￥{{ drugInfo.price }}</span>
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
      this.drugInfo = this.drug.filter((item) => item.id === this.id)[0]
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
.niceStock {
  width: 200px;
  height: 350px;
  // background: skyblue;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .niceStock-img {
    margin: 5px;
    img {
      width: 190px;
      height: 190px;
      cursor: pointer;
    }
  }
  .niceStock-text {
    cursor: pointer;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
      width: 150px;
      text-align: center;
    }
    .niceStock-text-goodsName:hover {
      color: darkgreen;
      text-decoration: underline;
    }
    .niceStock-text-goodsEffect {
      font-size: 14px;
      margin-top: 2px;
      color: gray;
      height: 60px;
      overflow: hidden;
    }
  }
  .niceStock-text-Price {
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    .niceStock-text-goodsNewPrice {
      color: red;
      font-size: 18px;
    }
    .niceStock-text-goodsOldPrice {
      font-size: 13px;
      text-decoration: line-through;
      line-height: 28px;
    }
  }
}
</style>
>
