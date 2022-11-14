<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="depts-container">
        <tree-tools :tree-node="companyInfo" is-root />
        <hr>
        <el-tree
          :data="departs"
          node-key="id"
          default-expand-all
        >
          <template v-slot="{ data }">
            <tree-tools :tree-node="data" />
          </template>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from '@/components/TreeTools'
import { getDepartments } from '@/api/depts'
import { list2Tree } from '@/utils/index'
export default {
  name: 'Department',
  components: {
    TreeTools
  },
  data() {
    return {
      departs: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      companyInfo: {
        name: '',
        manager: '负责人'
      }
    }
  },
  mounted() {
    this.loadDepartment()
  },
  methods: {
    async loadDepartment() {
      const res = await getDepartments()
      console.log(res)
      this.companyInfo.name = res.companyName
      this.departs = list2Tree(res.depts, '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .depts-container {
    padding: 30px 50px;
    .el-dropdown {
      font-size: 16px !important;
    }
  }
</style>
