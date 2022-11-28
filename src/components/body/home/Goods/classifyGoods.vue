<template>
  <div class="classifyGoods" @click="toDetail">
    <!-- 图片 -->
    <div class="classifyGoods-img">
      <img :src="require('../../home' + drugInfo.tupian)" alt="" />
    </div>
    <!-- 内容 -->
    <div class="classifyGoods-content">
      <span class="classifyGoods-content-name">药品名称：{{ drugInfo.drugname }}</span>
      <span class="classifyGoods-content-effect">功能主治:{{ drugInfo.zuoyong }}</span>
      <span>剂量：{{ drugInfo.guige }}</span>
      <span>单价：￥{{ drugInfo.price }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: { type: Number }
  },
  computed: {
    ...mapState(['drug'])
  },
  data() {
    return {
      drugInfo: {}
    }
  },
  methods: {
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
.flex(@jc,@ai,@wrap:wrap,@dir:row) {
  display: flex;
  justify-content: @jc;
  align-items: @ai;
  flex-wrap: @wrap;
  flex-direction: @dir;
}
.classifyGoods {
  width: 500px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  .flex(space-between,center);
  .classifyGoods-img {
    img {
      width: 200px;
      height: 200px;
    }
  }
  .classifyGoods-content {
    width: 280px;
    height: 180px;
    .flex(space-around,flex-start,wrap,column);
    .classifyGoods-content-effect {
      height: 40px;
      overflow: hidden;
    }
  }
}
</style>
