<template>
  <div class="homeStock">
    <!-- 图片 -->
    <div class="homeStock-img" @click="toDetail()">
      <img :src="require('../../home' + drugInfo.photo)" alt="" />
    </div>
    <!-- 文字 -->
    <div class="homeStock-text" @click="toDetail()">
      <span class="homeStock-text-goodsName" :title="drugInfo.name">{{ drugInfo.name }}</span>
      <!-- 药品作用太长了，不要了 -->
      <span class="homeStock-text-goodsEffect" :title="drugInfo.name">{{ drugInfo.function }}</span>
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
.homeStock {
  width: 200px;
  height: 300px;
  // background: skyblue;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .homeStock-img {
    margin: 5px;
    img {
      width: 190px;
      height: 190px;
      cursor: pointer;
    }
  }
  .homeStock-text {
    cursor: pointer;
    width: 150px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      width: 150px;
      text-align: center;
    }
    .homeStock-text-goodsName:hover {
      color: darkgreen;
      text-decoration: underline;
    }
    .homeStock-text-goodsEffect {
      font-size: 14px;
      margin-top: 2px;
      color: gray;
    }
  }
  .homeStock-text-Price {
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    .homeStock-text-goodsNewPrice {
      color: red;
      font-size: 18px;
    }
    .homeStock-text-goodsOldPrice {
      font-size: 13px;
      text-decoration: line-through;
      line-height: 28px;
    }
  }
}
</style>
>
