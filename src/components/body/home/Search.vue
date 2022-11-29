<template>
  <div class="search">
    <SearchGoods v-for="item in searchInfo" :key="item.id" :id="item.id"></SearchGoods>
  </div>
</template>

<script>
import SearchGoods from "@/components/body/home/Goods/SearchGoods";

export default {
  components:{
    SearchGoods
  },
  props: {
    id: { type: Number }
  },
  data() {
    return {
      searchInfo:[]
    }
  },
  methods: {
    getSearch(){
      this.$http({
        method: 'GET',
        url: `/get/search?searchKey=${this.$route.params.searchValue}`
      })
          .then(({ data: res }) => {
            console.log(res)
            if (res.success) {
              this.searchInfo = res.data
            } else {
            }
          }).catch((err)=>{
        console.log(err)
      })

    }
  },
  created(){
    this.getSearch()
  }
}
</script>

<style lang="less" scoped>
  .search{
    width: 1100px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
