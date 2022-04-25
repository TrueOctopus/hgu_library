<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-30 18:51:55
 * @LastEditTime: 2022-04-25 14:59:32
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="app-container md-layout-item md-size-90">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="资源名称" width="110" align="center">
        <template slot-scope="scope">
          <a :href="scope.row.urladdress">{{ scope.row.urlname }}</a>
        </template>
      </el-table-column>
      <el-table-column label="资源类型" width="220" align="center">
        <template slot-scope="scope">
          <span v-for="type in scope.row.types" :key="type">{{ type }} </span>
        </template>
      </el-table-column>
      <el-table-column label="资源类别" width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.genre }}
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { fetchDatabaseList } from '@/api/resource'

export default {
  name: 'ResourceTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchDatabaseList().then(response => {
        // console.log(response)
        const list = response.data.databaseList
        list.forEach(ele => {
          if (ele.types) ele.types = ele.types.split('|')
          switch (ele.genre) {
            case '外文':
              this.list.push(ele)
              break
            case '中外文':
              this.list.push(ele)
              break
            default :
              break
          }
        })
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  margin-top: 4vh;
  a {
    color: #448aff !important;
  }
}
</style>
