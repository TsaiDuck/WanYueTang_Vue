<template>
  <div class="classifyGoods">
    <!-- 图片 -->
    <div class="classifyGoods-img">
      <img src="" alt="" />
    </div>
    <!-- 内容 -->
    <div class="classifyGoods-content">
      <span class="classifyGoods-content-name">健胃消食片</span>
      <span>功能主治</span>
      <span>剂量</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.flex(@jc,@ai,@wrap:wrap) {
  display: flex;
  justify-content: @jc;
  align-items: @ai;
  flex-wrap: @wrap;
}
.classifyGoods {
  width: 500px;
  height: 200px;
  margin: 10px;
  background-color: red;
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
  }
}
</style>
