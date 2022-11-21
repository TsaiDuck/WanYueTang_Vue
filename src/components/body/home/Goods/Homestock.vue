<template>
  <div class="homeStock">
    <ul class="homeStock-list">
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
      <li class="homeStock-item">
        <img :src="goodsImg" ref="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
    </ul>
    =======
    <ul class="homeStock-list">
      <li class="homeStock-item" v-for="item in list" :key="item.goodId" @click="gotoDetails(item.goodId)">
        <img :src="goodsImg" alt="" />
        <div class="homeStock-text">
          <span class="homeStock-text-goodsName" :title="goodsName">{{ goodsName }}</span>
          <span class="homeStock-text-goodsEffect" :title="goodsName">{{ goodsEffect }}</span>
          <span class="homeStock-text-goodsPrice">￥{{ goodsPrice }}</span>
        </div>
      </li>
    </ul>
    >>>>>>> e19c2707063fea229c3d49b4dc539d3ffbf95f50
  </div>
</template>

<script>
export default {
  props: {
    goodsId: {
      default: '',
      type: Number
    },
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
  },
  data() {
    return {
      list: [{ goodId: this.goodsId, goodName: this.goodsName }]
    }
  },
  methods: {
    gotoDetails(id) {
      this.$router.push('/goodsDetails/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.homeStock {
  margin-top: 10px;
  .homeStock-list {
    padding-left: 5px;
    display: flex;
    margin: 5px 15px 5px 5px;
    flex-wrap: wrap;
    justify-content: space-between;
    .homeStock-item {
      width: 200px;
      height: 300px;
      list-style-type: none;
      align-items: center;
      img {
        width: 190px;
        height: 190px;
        cursor: pointer;
      }
      .homeStock-text {
        margin-top: 15px;
        span {
          display: block;
          text-align: center;
          cursor: pointer;
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
        .homeStock-text-goodsPrice {
          margin: 8px 0;
          color: red;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
