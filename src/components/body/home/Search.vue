<template>
  <div class="search">
    <div class="search-ok" v-if="searchState">
      <SearchGoods v-for="item in searchInfo" :key="item.id" :id="item.id"></SearchGoods>
    </div>
    <div class="search-null" v-else><el-empty description="很抱歉，未能查找到您需要的药品..."></el-empty></div>
  </div>
</template>

<script>
import SearchGoods from '@/components/body/home/Goods/SearchGoods'

export default {
  components: {
    SearchGoods
  },
  props: {
    id: { type: Number }
  },
  data() {
    return {
      searchInfo: [],
      searchState: false
    }
  },
  methods: {
    getSearch() {
      this.$http({
        method: 'GET',
        url: `/get/search?searchKey=${this.$route.params.searchValue}`
      })
        .then(({ data: res }) => {
          if (res.success) {
            this.searchInfo = res.data
            this.searchState = true
          } else {
            this.searchState = false
          }
        })
        .catch((err) => {
          this.$alert(err.message, err.name, {
            confirmButtonText: '取消'
          })
        })
    }
  },
  created() {
    this.getSearch()
  },
  watch: {
    $route: {
      handler: function () {
        this.getSearch()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 1100px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .search-ok {
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .search-null {
    width: 500px;
    height: 400px;
    margin: 20px auto;
  }
}
</style>
