<template>
  <div class="dailyGoods">
    <!-- 图片 -->
    <div class="dailyGoods-img">
      <img :src="goodsImg" alt="" />
    </div>
    <!-- 文字 -->
    <div class="dailyGoods-text">
      <span class="dailyGoods-text-goodsName" :title="goodsName">{{ goodsName }}</span>
      <span class="dailyGoods-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
      <div class="dailyGoods-text-Price">
        <span class="dailyGoods-text-goodsNewPrice">￥{{ goodsPrice * 0.8 }}</span>
        <span class="dailyGoods-text-goodsOldPrice">￥{{ goodsPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsName: {
      default: '',
      type: String
    },
    goodsEffect: {
      default: '',
      type: String
    },
    goodsPrice: {
      default: 0,
      type: Number
    },
    goodsImg: {
      default: '',
      type: String
    }
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
