<template>
  <div class="footer">
    <hr />
    <div class="footer-top">
      <a href="#/home">首页</a><span class="span">|</span> <a href="#">关于我们</a><span class="span">|</span>
      <a href="#">法律声明</a><span class="span">|</span>
      <a href="#">隐私政策</a>
    </div>
    <div class="footer-bottom">
      <span>京公网安备&nbsp;114514号</span><span class="span">|</span> <span>京ICP114514号</span
      ><span class="span">|</span> <span>互联网药品信息服务资格证编号(京)-经营性-114514</span><br />
      <span>互联网出版许可证编号新出网证(京)字114514号</span><span class="span">|</span> <span>出版物经营许可证</span
      ><span class="span">|</span> <span>网络文化经营许可证京网文114514号</span><span class="span">|</span>
      <span>违法和不良信息举报电话：114514</span><br />
      <span>Copyright&copy;&nbsp;2022&nbsp;万月堂版权所有</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.footer {
  color: darkgray;
  margin-top: 20px;
  width: 100%;
  height: 110px;
  text-align: center;
  font-size: 14px;
  hr {
    width: 100%;
    border-top: 1px solid rgba(169, 169, 169, 0.46);
  }
  a {
    color: #666666;
    text-decoration: none;
    vertical-align: middle;
  }
  a:hover {
    color: darkgreen;
  }
}
span {
  vertical-align: middle;
  margin: 5px 3px;
  font-size: 10px;
}
.footer-top {
  padding-top: 20px;
}
.footer-bottom {
  padding-top: 10px;
  a {
    color: darkgray;
  }
}
</style>
