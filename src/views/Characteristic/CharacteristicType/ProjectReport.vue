<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-24 18:58:25
 * @LastEditTime: 2022-04-24 19:39:51
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-90 table">
      <div>
        <el-input v-model="listQuery.author" placeholder="作者" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-input v-model="listQuery.subjectName" placeholder="课题名称或承担项目" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-input v-model="listQuery.projectSource" placeholder="项目来源" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />

        <md-button class="filter-item md-info btn" @click="handleFilter">搜索</md-button>

      </div>

      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="作者" width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.author }}
          </template>
        </el-table-column>
        <el-table-column label="课题名称或承担项目" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.subjectName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目来源" width="220" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.projectSource }}</span>
          </template>
        </el-table-column>
        <el-table-column label="起止时间" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.startAndEndTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="" align="center" width="120" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <md-button class="md-sm md-info" @click="handleDownload(row)">下载</md-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="md-layout-item md-size-10" />
    <div class="md-layout-item md-size-15 total">共 {{ total }} 条</div>
    <pagination
      v-model="listQuery.pageNo"
      :class="`pagination-${infoColor} md-layout-item md-size-85`"
      :page-count="pages"
      @input="fetchList"
    />
  </div>
</template>

<script>
import { Pagination } from '@/components'
import { searchAcaProjectReport, downloadCharacteristic } from '@/api/characteristic'
export default {
  name: 'ProjectReport',
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      listLoading: true,
      infoColor: 'info',
      pages: 1,
      total: 0,
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        author: '',
        subjectName: '',
        projectSource: ''
      }
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      this.listLoading = true
      searchAcaProjectReport(this.listQuery).then(response => {
        // console.log(response)
        const list = response.data.pageinfo.list
        this.list = list
        this.pages = response.data.pageinfo.pages
        this.total = response.data.pageinfo.total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.fetchList()
    },
    handleDownload(row) {
      window.open(downloadCharacteristic + row.subjectName)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  .btn {
    margin-left: 10px;
    margin-top: -2px;
  }
}
.total {
  line-height: 3.8rem;
  padding-left: 2rem;
}
</style>
