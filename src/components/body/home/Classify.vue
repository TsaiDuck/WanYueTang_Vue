<template>
  <div class="fever">
    <ClassifyGoods v-for="item in drugInfo" :id="item.id" :key="item.id"></ClassifyGoods>
  </div>
</template>

<script>
import ClassifyGoods from '@/components/body/home/Goods/classifyGoods.vue'
import { mapState } from 'vuex'

export default {
  mounted() {
    this.judgeDepartment()
    this.getFeverDrug()
  },
  components: {
    ClassifyGoods
  },
  data() {
    return {
      drugInfo: [],
      department: ''
    }
  },
  methods: {
    getFeverDrug() {
      this.drugInfo = this.drug.filter((item) => item.department === this.department)
    },
    judgeDepartment() {
      switch (this.$route.params.name) {
        case 'fever':
          this.department = '发热科'
          break
        case 'digestion':
          this.department = '消化内科'
          break
        case 'OGDepartment':
          this.department = '妇产科'
          break
        case 'andrology':
          this.department = '乙肝'
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
        this.judgeDepartment()
        this.getFeverDrug()
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
