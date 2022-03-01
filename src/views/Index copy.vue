<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:25:02
 * @LastEditTime: 2022-02-28 21:42:22
 * @LastEditors: 郑钊宇
 * @Description: 主页面
-->
<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>河北地质大学图书馆</h1>
              <h3>HeBei GEO University Library</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised test">
      <div class="section" id="tabs">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div
            class="md-layout-item md-size-80 md-small-size-90"
            @click="onTopClick('tabs')"
          >
            <nav-tabs-card>
              <template slot="content">
                <md-tabs class="md-info" md-alignment="fixed">
                  <md-tab
                    id="tab-home"
                    md-label="馆藏目录"
                    md-icon="auto_stories"
                  >
                    <p>
                      <el-form
                        :model="docForm"
                        :rules="rules"
                        ref="docForm"
                        label-width="100px"
                        class="formStyle"
                        ><el-form-item label="文献类型" prop="docType">
                          <el-select
                            v-model="docForm.docType"
                            placeholder="请选择文献类型"
                          >
                            <el-option label="所有书刊" value="all"></el-option>
                            <el-option
                              label="中文图书"
                              value="cnBooks"
                            ></el-option>
                            <el-option
                              label="西文图书"
                              value="unCnBooks"
                            ></el-option>
                            <el-option
                              label="中文期刊"
                              value="cnPeriodicals"
                            ></el-option>
                            <el-option
                              label="西文期刊"
                              value="unCnPeriodicals"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="文献名称" prop="name">
                          <el-input v-model="docForm.name"></el-input>
                        </el-form-item>

                        <el-form-item>
                          <md-button
                            class="md-info"
                            @click="submitForm('docForm')"
                            >开始搜索</md-button
                          >
                          <md-button @click="resetForm('docForm')"
                            >重置</md-button
                          >
                        </el-form-item>
                      </el-form>
                    </p>
                  </md-tab>

                  <md-tab id="tab-pages" md-label="百度学术" md-icon="edit">
                    <p>
                      <el-form
                        :model="baiduSearchForm"
                        :rules="rules"
                        ref="baiduSearchForm"
                        label-width="100px"
                        class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                          <el-input
                            v-model="baiduSearchForm.searchWords"
                          ></el-input>
                        </el-form-item>
                        <el-form-item>
                          <md-button
                            class="md-info"
                            @click="submitForm('baiduSearchForm')"
                            >开始搜索</md-button
                          >
                          <md-button @click="resetForm('baiduSearchForm')"
                            >重置</md-button
                          >
                        </el-form-item>
                      </el-form>
                    </p>
                  </md-tab>

                  <md-tab
                    id="tab-posts"
                    md-label="超星发现"
                    md-icon="saved_search"
                  >
                    <p>
                      <el-form
                        :model="chaoXingForm"
                        :rules="rules"
                        ref="chaoXingForm"
                        label-width="100px"
                        class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                          <el-input
                            v-model="chaoXingForm.searchWords"
                          ></el-input>
                        </el-form-item>
                        <el-form-item>
                          <md-button
                            class="md-info"
                            @click="submitForm('chaoXingForm')"
                            >开始搜索</md-button
                          >
                          <md-button @click="resetForm('chaoXingForm')"
                            >重置</md-button
                          >
                        </el-form-item>
                      </el-form>
                    </p>
                  </md-tab>

                  <md-tab id="tab-posts1" md-label="我的图书馆" md-icon="face">
                    <p>
                      <el-form
                        :model="readerCardForm"
                        :rules="rules"
                        ref="readerCardForm"
                        label-width="100px"
                        class="formStyle"
                        ><el-form-item label="读者证号" prop="readerCardNumber">
                          <el-input
                            v-model="readerCardForm.readerCardNumber"
                            autocomplete="off"
                          ></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="readerCardPassword">
                          <el-input
                            v-model="readerCardForm.readerCardPassword"
                            autocomplete="off"
                            type="password"
                            placeholder="默认与证件号相同"
                          ></el-input>
                        </el-form-item>
                        <el-form-item>
                          <md-button
                            class="md-info"
                            @click="submitForm('readerCardForm')"
                            >登录</md-button
                          >
                          <md-button @click="resetForm('readerCardForm')"
                            >重置</md-button
                          >
                        </el-form-item>
                      </el-form>
                    </p>
                  </md-tab>
                </md-tabs>
              </template>
            </nav-tabs-card>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div class="section" id="resBtns">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout md-layout-item md-gutter res-btns">
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
            <ResBtn class="md-layout-item" iconName="face" text="主页"></ResBtn>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div class="section" id="resource">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item">
            <h1 class="tittle">常用数据库列表</h1>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";
import ResBtn from "./components/ResourceButtonSection.vue";
export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    NavTabsCard,
    ResBtn
  },
  data() {
    return {
      docForm: {
        name: "",
        docType: "all"
      },
      baiduSearchForm: {
        searchWords: ""
      },
      chaoXingForm: {
        searchWords: ""
      },
      readerCardForm: {
        readerCardNumber: "",
        readerCardPassword: ""
      },
      rules: {
        name: [{ required: true, message: "请输入文献名称", trigger: "blur" }],
        docType: [
          { required: true, message: "请选择文献区域", trigger: "change" }
        ],
        searchWords: [
          { required: true, message: "请输入检索词", trigger: "change" }
        ],
        readerCardNumber: [
          { required: true, message: "请输入读者证号", trigger: "blur" },
          { min: 12, max: 12, message: "长度应为12位", trigger: "blur" }
        ],
        readerCardPassword: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  props: {
    image: {
      type: String,
      // default: require("@/assets/img/header.jpg")
      default: require("@/assets/img/vue-mk-header.jpg")
    }
  },
  methods: {
    onTopClick(locationId) {
      //获取目标元素
      let element = document.getElementById(locationId);
      //元素方法调用
      element.scrollIntoView();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
/* .test {
  height: 1000px;
} */
/* #tabs {
  padding-bottom: 0px;
}
#resBtns {
  padding-top: 0px;
}
.formStyle {
  text-align: left;
  width: 95%;
}
.formStyle button {
  margin-right: 10px;
} */
</style>
