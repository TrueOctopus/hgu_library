<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-24 18:58:26
 * @LastEditTime: 2022-06-09 10:53:41
 * @LastEditors: 郑钊宇
 * @Description: 专利页面
-->
<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-90 table">
      <!-- 搜索 -->
      <div>
        <el-input v-model="listQuery.author" placeholder="作者" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-input v-model="listQuery.title" placeholder="题目" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />

        <md-button class="filter-item md-info btn" @click="handleFilter">搜索</md-button>

      </div>
      <!-- 搜索 -->
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
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公开日" width="220" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.openDay }}</span>
          </template>
        </el-table-column>
        <el-table-column label="" align="center" width="120" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <md-button class="md-sm md-info" @click="handleDownload(row)">下载</md-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
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
import { searchAcaPatent, downloadCharacteristic } from '@/api/characteristic'
export default {
  name: 'Patent',
  components: {
    Pagination
  },
  data() {
    return {
      list: [], // 列表数据
      listLoading: true, // 列表加载状态
      infoColor: 'info', // 分页颜色
      pages: 1, // 分页数量
      total: 0, // 总数量
      listQuery: {
        pageNo: 1, // 当前页码
        pageSize: 10, // 每页数量
        author: '', // 作者
        title: '' // 题目
      } // 查询参数
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() { // 获取列表数据
      this.listLoading = true
      searchAcaPatent(this.listQuery).then(response => {
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
      window.open(downloadCharacteristic + row.title) // 下载
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
