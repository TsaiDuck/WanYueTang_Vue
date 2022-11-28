<template>
  <div class="fever">
    <ClassifyGoods v-for="item in drugInfo" :id="item.drugid" :key="item.drugid"></ClassifyGoods>
  </div>
</template>

<script>
import ClassifyGoods from '@/components/body/home/Goods/classifyGoods.vue'
import { mapState } from 'vuex'

export default {
  created() {
    this.judgeKeshi()
    this.getFeverDrug()
  },
  components: {
    ClassifyGoods
  },
  data() {
    return {
      drugInfo: [],
      keshi: ''
    }
  },
  methods: {
    getFeverDrug() {
      this.drugInfo = this.drug.filter((item) => item.keshi === this.keshi)

      // console.log(this.drugInfo)
    },
    judgeKeshi() {
      switch (this.$route.params.name) {
        case 'fever':
          this.keshi = '发热科'
          break
        case 'digestion':
          this.keshi = '消化内科'
          break
        case 'OGDepartment':
          this.keshi = '妇产科'
          break
        case 'andrology':
          this.keshi = '乙肝'
          break
      }
    }
  },
  computed: {
    ...mapState(['drug'])
  },
  watch: {
    $route: {
      handler: function () {
        location.reload()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fever {
  width: 1100px;
  margin: 10px auto;
  // background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
