<template>
  <div class="fever">
    <FeverGoods></FeverGoods>
    <FeverGoods></FeverGoods>
    <FeverGoods></FeverGoods>
  </div>
</template>

<script>
import FeverGoods from "@/components/body/home/Goods/classifyGoods.vue";
export default {
  components: {
    FeverGoods,
  },
};
</script>

<style lang="less" scoped>
.fever {
  width: 1100px;
  margin: 10px auto;
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
