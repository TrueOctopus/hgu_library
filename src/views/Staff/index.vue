<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-11 15:10:44
 * @LastEditTime: 2022-06-09 14:36:24
 * @LastEditors: 郑钊宇
 * @Description: 教职工读者证查询页面
-->
<template>
  <div>
    <TemplePage :detail-tittle="detailTittle">
      <template #breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/staffnumber' }">
            {{ detailTittle }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #text>
        <el-form ref="workForm" :model="workForm" :rules="rules" label-width="100px">
          <el-form-item label="职工号" prop="workNumber">
            <el-input v-model="workForm.workNumber" />
          </el-form-item>
          <el-form-item label="姓名" prop="worker">
            <el-input v-model="workForm.worker" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('workForm')">搜索</el-button>
            <el-button @click="resetForm('workForm')">重置</el-button>
          </el-form-item>
        </el-form>

        <div v-show="result.readerIdNumber" class="result">
          <h2>查询结果</h2>
          <ul>
            <li><b>职工号：</b>{{ result.workNumber }}</li>
            <li><b>姓名：</b>{{ result.worker }}</li>
            <li><b>读者证号：</b>{{ result.readerIdNumber }}</li>
          </ul>
        </div>
      </template>
    </TemplePage>
  </div>
</template>

<script>
import TemplePage from '../components/DetailTemplePage.vue'
import { readerIdNumberSearch } from '@/api/staff'
export default {
  components: { TemplePage },
  data() {
    return {
      detailTittle: '教职工号查询', // 主标题
      workForm: {
        workNumber: '', // 职工号
        worker: '' // 姓名
      }, // 搜索表单
      result: {
        workNumber: '', // 职工号
        worker: '', // 姓名
        readerIdNumber: '' // 读者证号
      }, // 搜索结果
      rules: {
        workNumber: [
          { required: true, message: '请输入职工号', trigger: 'blur' }
        ],
        worker: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      } // 表单验证规则
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          readerIdNumberSearch(this.workForm).then(res => {
            // console.log(res)
            this.$store.dispatch('notification/promptNotification', {
              noticeType: 'info',
              message: res.msg
            })
            this.result = res.data.result
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.result {
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 1rem;
}
</style>
