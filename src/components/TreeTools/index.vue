<template>
  <el-row class="tree-item">
    <el-col :span="12">
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="12">
      <el-row type="flex" justify="end">
        <span class="manage-text">{{ treeNode.manager }}</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>添加子部门</el-dropdown-item>
            <el-dropdown-item v-if="!isRoot">编辑子部门</el-dropdown-item>
            <el-dropdown-item v-if="!isRoot">删除子部门</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TreeTools',
  props: {
    treeNode: {
      type: Object,
      default: () => {}
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.manage-text {
  width: 50px;
  margin-right: 20px;
  font-size: 16px;
  text-align: center;
}
.tree-item {
  width: 100%;
}
</style>
