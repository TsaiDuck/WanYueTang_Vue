<template>
  <div class="goodsDetails">
    <!--{{ $route.params.id }}-->
    <div class="left">
      <img src="@/images/test/img4.jpg" alt="">
      <span class="imgtip">温馨提醒：商品包装因厂家更换频繁，如有不符请以实物为准。</span>
    </div>

    <div class="right">
      <h1 class="title">健胃消食片</h1>
      <hr style="border: 1px #e5e5e5 dashed"/>
      <div class="info">
        <table>
          <tr>
            <td>价<em></em>格</td>
            <td class="td1">￥20.00</td>
          </tr>
          <tr>
            <td>通用名称</td>
            <td class="td2">健胃消食片</td>
          </tr>
          <tr>
            <td>包装规格</td>
            <td class="td2">0.8gx8片x4板/盒</td>
          </tr>
          <tr>
            <td>剂<em></em>型</td>
            <td class="td2">薄膜衣片剂</td>
          </tr>
          <tr>
            <td>有<em class="em2"></em>效<em class="em2"></em>期</td>
            <td class="td2">24个月</td>
          </tr>
          <tr>
            <td>适<em class="em2"></em>应<em class="em2"></em>症</td>
            <td class="td2">健胃消食。用于脾胃虚弱所致的食积，症见不思饮食、嗳腐酸臭、脘腹胀满；消化不良见上述证候者。</td>
          </tr>
          <tr>
            <td>数<em></em>量</td>
            <td class="td2">
              <el-button @click="sub" style="width: 30px; height: 30px; font-size: 16px; line-height: 30px">
                <i class="el-icon-minus"></i>
              </el-button>
              <input type="text" v-model:value=count @blur="judge">
              <el-button @click="add" style="width: 30px; height: 30px; font-size: 16px; line-height: 30px">
                <i class="el-icon-plus"></i>
              </el-button>
            </td>
          </tr>
        </table>
      </div>
     <div class="button">
       <el-button type="danger" class="el-button2">购买</el-button>
       <el-button type="primary" class="el-button2">加入购物车</el-button>
     </div>
    </div>
    <div class="bottom">
      <h1>药品说明书</h1>
      <hr style="border: 1px #eeeeee solid; margin: 10px 0"/>
      <div class="book">
        <table class="book-table">
          <tr>
            <td class="td1">药品名称：</td>
            <td class="td2">本品主要成份为：枸橼酸西地那非。<br/>其化学名称为：1-{4-乙氧基-3-[5-(6,7-二氢-1-甲基-7-氧代-3-丙基-1H-吡唑并[4,3D]嘧啶)]苯磺酰}-4-甲基哌嗪枸橼酸盐。

              分子式：C22H30N6O4S·C6H8O7

              分子量：666.7</td>
          </tr>
          <tr>
            <td class="td1">剂型：</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td1">规格：</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td1">用法用量：</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td1">功能主治：</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td1">禁忌：</td>
            <td class="td2">1</td>
          </tr>
          <tr>
            <td class="td1">有效期：</td>
            <td class="td2">1</td>
          </tr>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetails",
  props:{
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
    },
    goodsNum: {
      default: 10,
      type: Number
    }
  },
  data(){
    return{
      count: 1,
      goodNum: this.goodsNum,
      tableData:[
        {adress:"1234"}
      ]
    }
  },
  methods:{
    judge(){
      if(this.count == "" || this.count<=0 || typeof(this.count) != Number)
        this.count = 1
      if(this.count >= this.goodNum)
        this.count = this.goodNum
    },
    add(){
      if(this.count<this.goodNum){
        this.count +=1
      }
    },
    sub(){
      if(this.count>1){
        this.count -=1
      }
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.goodsDetails{
  height: auto;
  width: 90%;
  margin: 30px auto;
  text-align: left;
  clear: both;
  zoom: 1;
  overflow: hidden;
  .left{
    float: left;
    width: 400px;
    border: 1px solid #e5e5e5;
    display: block;
    position: relative;
    img{
      width: 390px;
      height: 390px;
      padding: 3px;
    }
    .imgtip{
      bottom: 5px;
      color: #999;
      left: 0;
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 14px;
    }
  }
  .right{
    position: relative;
    float: left;
    margin-left: 50px;
    width: 900px;

    .title{
      margin-bottom: 20px;
      padding: 0 20px 0 0;
      font-size: 25px;
      overflow: hidden;
      width: 600px;
      white-space: nowrap;
      font-weight: normal;
    }
    .info{
      table{
        //float: left;
        border-spacing: 26px 26px;
        list-style-type: none;
        font-size: 16px;
        color: #999999;
        tr{
          padding: 13px 0;
          .td1{
            color: red;
            font-size: 26px;
            font-weight: bold;
          }
          .td2{
            color: black;
            font-size: 16px;
          }
          input{
            width: 60px;
            height: 26px;
            margin: 0 10px;
            border: 1px solid #A6A5AA;
            padding: 2px;
          }
          em{
            padding-left: 32px;
          }
          .em2{
            padding-left: 8px;
          }
        }
      }
    }
    .button{
      text-align: center;
      height: 60px;
      line-height: 60px;
      .el-button2{
        width: 150px;
        height: 50px;
        font-size: 20px;
      }
    }
  }
  .bottom{
    float: left;
    margin-top: 30px;
    padding: 30px;
    border: 1px solid #e5e5e5;
    width: 1290px;
    h1{
      font-weight: normal;
      font-size: 25px;
    }
    .book{
      .book-table{
        margin: 20px auto;
        width: 1000px;
        border: 1px solid #e5e5e5;
        border-collapse: collapse;
        color: #333;
        font-size: 16px;
        td{
          height: 40px;
          line-height: 20px;
          border: 1px solid #e5e5e5;
          padding: 20px;
        }
        .td1{
          width: 300px;
          text-align: center;
        }
        .td2{
          width: 695px;
          text-align: left;
        }
      }
    }
  }
}
</style>