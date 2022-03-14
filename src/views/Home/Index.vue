<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-03-14 16:02:14
 * @LastEditors: 郑钊宇
 * @Description: 主页
-->
<template>
  <div class="wrapper">
    <AnchorNav></AnchorNav>
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout" style="width:99%">
        <div class="image-wrapper" style="width:99%">
          <div class="brand">
            <!-- <div class="md-layout-item md-size-100 md-small-size-100">
                <h1>河北地质大学图书馆</h1>
                <h3>HeBei GEO University Library</h3>
              </div> -->
            <div
              class="md-layout animate__animated animate__slow animate__fadeInUp"
            >
              <div class="md-layout-item md-size-10"></div>
              <nav-tabs-card
                no-label
                id="header-tabs"
                class="md-layout-item md-size-80"
              >
                <template slot="content">
                  <md-tabs class="md-info" md-alignment="fixed">
                    <md-tab
                      id="tab-pages1"
                      md-label="馆藏目录"
                      md-icon="auto_stories"
                    >
                      <p>
                        <el-form
                          :model="docForm"
                          :rules="rules"
                          :inline="true"
                          ref="docForm"
                          label-width="100px"
                          class="formStyle"
                          ><el-form-item label="文献类型" prop="docType">
                            <el-select
                              v-model="docForm.docType"
                              placeholder="请选择文献类型"
                            >
                              <el-option
                                label="所有书刊"
                                value="all"
                              ></el-option>
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
                          <el-form-item label="文献题名" prop="docName">
                            <el-input v-model="docForm.docName"></el-input>
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

                    <md-tab id="tab-pages2" md-label="百度学术" md-icon="edit">
                      <p>
                        <el-form
                          :model="baiduSearchForm"
                          :rules="rules"
                          :inline="true"
                          ref="baiduSearchForm"
                          label-width="100px"
                          class="formStyle"
                          ><el-form-item label="检索词" prop="searchWords">
                            <el-input
                              class="single-input"
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
                      id="tab-pages3"
                      md-label="超星发现"
                      md-icon="saved_search"
                    >
                      <p>
                        <el-form
                          :model="chaoXingForm"
                          :rules="rules"
                          :inline="true"
                          ref="chaoXingForm"
                          label-width="100px"
                          class="formStyle"
                          ><el-form-item label="检索词" prop="searchWords">
                            <el-input
                              class="single-input"
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

                    <md-tab
                      id="tab-pages4"
                      md-label="我的图书馆"
                      md-icon="face"
                    >
                      <p>
                        <el-form
                          :model="readerCardForm"
                          :rules="rules"
                          :inline="true"
                          ref="readerCardForm"
                          label-width="100px"
                          class="formStyle"
                          ><el-form-item
                            label="读者证号"
                            prop="readerCardNumber"
                          >
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
              <div class="md-layout-item md-size-10"></div>
            </div>
            <div
              class="md-layout animate__animated animate__slow animate__fadeInUp animate__delay-1s"
            >
              <div class="md-layout-item md-size-10"></div>
              <div class="res-btns md-layout md-layout-item md-size-80">
                <div class="md-layout md-layout-item md-size-100">
                  <div class="md-layout-item">
                    <ResBtn iconName="schedule" text="开放时间"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="chair_alt" text="座位预约"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="local_library" text="研修室预约"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn
                      iconName="format_list_bulleted"
                      text="入馆须知"
                    ></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="book" text="图书续借"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn
                      iconName="collections_bookmark"
                      text="资源荐购"
                    ></ResBtn>
                  </div>
                </div>
                <div class="md-layout md-layout-item md-size-100">
                  <div class="md-layout-item">
                    <ResBtn iconName="school" text="校外访问"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="storage" text="数据库"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="dashboard" text="馆藏布局"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="3p" text="培训讲座"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="bookmark_add" text="新书通报"></ResBtn>
                  </div>
                  <div class="md-layout-item">
                    <ResBtn iconName="volunteer_activism" text="捐赠"></ResBtn>
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-size-10"></div>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section" id="announcement">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-90 tittle">新闻公告</h3>
            <router-link
              to="/announcement"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <NewsElem
                :newsTypeIndex="1"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="0"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="0"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="0"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="1"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="1"
                tittle="这是一段测试文字"
                date="12/13"
              ></NewsElem>
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
              </div>
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
              </div>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-90 tittle">资源信息</h3>
            <router-link
              to="/announcement"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <NewsElem
                :newsTypeIndex="3"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="2"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="2"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="3"
                tittle="这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="3"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              ></NewsElem>
              <NewsElem
                :newsTypeIndex="3"
                tittle="这是一段测试文字"
                date="12/13"
              ></NewsElem>
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
              </div>
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                />
              </div>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div class="section" id="publicity">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3
              class="md-layout-item md-size-90 tittle"
              style="padding-bottom: 30px"
            >
              阅读推广
            </h3>
            <router-link
              to="/announcement"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <el-carousel
              :interval="3000"
              type="card"
              height="434px"
              indicator-position="none"
              class="md-layout-item md-size-100"
            >
              <el-carousel-item>
                <div class="md-layout">
                  <div class="md-layout-item md-size-20" />
                  <div class="md-layout-item md-size-60">
                    <el-card
                      :body-style="{ padding: '0px' }"
                      shadow="hover"
                      style="height:434px"
                    >
                      <img src="@/assets/img/st.jpg" class="image" />
                      <div style="padding: 14px;">
                        <span>《三体》</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="md-layout">
                  <div class="md-layout-item md-size-20" />
                  <div class="md-layout-item md-size-60">
                    <el-card
                      :body-style="{ padding: '0px' }"
                      shadow="hover"
                      style="height:434px"
                    >
                      <img src="@/assets/img/dsp.jpg" class="image" />
                      <div style="padding: 14px;">
                        <span>《三体》</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="md-layout">
                  <div class="md-layout-item md-size-20" />
                  <div class="md-layout-item md-size-60">
                    <el-card
                      :body-style="{ padding: '0px' }"
                      shadow="hover"
                      style="height:434px"
                    >
                      <img src="@/assets/img/xgxlx.jpg" class="image" />
                      <div style="padding: 14px;">
                        <span>《三体》</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="md-layout">
                  <div class="md-layout-item md-size-20" />
                  <div class="md-layout-item md-size-60">
                    <el-card
                      :body-style="{ padding: '0px' }"
                      shadow="hover"
                      style="height:434px"
                    >
                      <img src="@/assets/img/zcwa.jpg" class="image" />
                      <div style="padding: 14px;">
                        <span>《三体》</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="md-layout">
                  <div class="md-layout-item md-size-20" />
                  <div class="md-layout-item md-size-60">
                    <el-card
                      :body-style="{ padding: '0px' }"
                      shadow="hover"
                      style="height:434px"
                    >
                      <img src="@/assets/img/zkl.jpg" class="image" />
                      <div style="padding: 14px;">
                        <span>《三体》</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div class="section" id="lecture">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-90 tittle">活动讲座</h3>
            <router-link
              to="/announcement"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <div class="md-layout-item md-size-95">
              <EventsCalendar></EventsCalendar>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div class="section" id="characteristic">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-90 tittle">特色资源</h3>
            <router-link
              to="/characteristic"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <div class="md-layout-item md-size-95">
              <CharacteristicSection />
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <!-- <div class="section" id="resource" :style="bgImage">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-layout dataBaseList">
            <div class="md-layout-item dataBaseListItem">
              <div class="md-layout">
                <h3 class="md-layout-item md-size-80 tittle">常用数据库列表</h3>
                <router-link
                  to="/databaselist"
                  class="md-layout-item md-size-20 moreClass"
                >
                  更多>>
                </router-link>
              </div>
              <el-collapse accordion>
                <el-collapse-item title="中文资源">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="外文资源">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="试用资源">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="开放资源">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="md-layout-item dataBaseListItem">
              <div class="md-layout">
                <h3 class="md-layout-item md-size-80 tittle">特色资源</h3>
                <router-link
                  to="/characteristic"
                  class="md-layout-item md-size-20 moreClass"
                >
                  更多>>
                </router-link>
              </div>
              <el-collapse accordion>
                <el-collapse-item title="随书光盘">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="高教社产品检索">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="中外图书大全">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
                <el-collapse-item title="英文名著3000">
                  <div>
                    CNKI(北京) CNKI(本地) 维普知识资源 维普期刊 读秀学术搜索
                    百链搜索 EBM中外文 国泰安数据 国研网 全球案例发现
                    经济期刊总库
                  </div>
                  <div>
                    经济社会统计 科学文献计量 国家哲社期刊 EBM中文(远程)
                    CADAL国家自科基金 河地大学报
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div> -->

      <div class="section section-tabs" id="friendLink">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-100 tittle">友情链接</h3>
            <div class="md-layout-item md-size-25 ">
              国家图书馆<br />中国地质图书馆<br />北京大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              吉林大学图书馆<br />地质大学图书馆<br />中南大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              河北工业大学图书馆<br />河北科技大学图书馆<br />河北师范大学图书馆<br />
              河北大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              河北科技大学图书馆<br />河北师范大学图书馆<br />河北大学图书馆
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";
import ResBtn from "../components/ResourceButtonSection.vue";
import NewsElem from "../components/NewsElement.vue";
import AnchorNav from "../components/AnchorNav.vue";
import EventsCalendar from "../components/EventsCalendar.vue";
import CharacteristicSection from "../components/CharacteristicSection.vue";
export default {
  components: {
    NavTabsCard,
    ResBtn,
    NewsElem,
    AnchorNav,
    EventsCalendar,
    CharacteristicSection
  },
  name: "index",
  props: {
    headerImage: {
      type: String,
      default: require("@/assets/img/header.jpg")
    },
    image: {
      type: String,
      default: require("@/assets/img/cynthia-del-rio.jpg")
    },
    resourseImage: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  data() {
    return {
      currentDate: new Date(),
      docForm: {
        docName: "",
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
        docName: [
          { required: true, message: "请输入文献名称", trigger: "change" }
        ],
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
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerImage})`
      };
    },
    bgImage() {
      return {
        backgroundImage: `url(${this.resourseImage})`
      };
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
  }
};
</script>
<style lang="scss" scoped>
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
.main-raised {
  margin-top: 0 !important;
}
// #resBtns {
//   padding: 0px 0px 30px;
// }
.res-btns {
  background-color: #fff;
  border-radius: 5px;
}
.formStyle {
  padding-top: 15px;
  text-align: left;
  .single-input {
    width: 500px;
  }
  button {
    margin-top: -2px;
    margin-left: 3vh;
  }
}
.brand {
  // color: #fff;
  margin-top: 7%;
  // h1 {
  //   font-family: "Microsoft Yahei", Times, serif;
  //   font-size: 3.5rem;
  //   font-weight: bold;
  //   letter-spacing: 5px;
  // }
  // h3 {
  //   font-family: "Verdana", "Microsoft Yahei", Times, serif;
  //   font-size: 1.5rem;
  // }
}
#header-tabs {
  * {
    font-size: 14px;
  }
}
// #resource {
//   padding: 80px 0;
// }
// .dataBaseList {
//   margin: 0 15px !important;
//   padding: 5px 0;
//   background-color: rgb(255, 255, 255);
//   box-shadow: 0px 2px 5px 0px rgb(211, 211, 211);
//   border-radius: 8px;
// }
// .dataBaseListItem {
//   * {
//     background-color: rgba(255, 255, 255, 0) !important;
//   }
// }
.moreClass {
  font-size: 14px;
  color: #3c4858 !important;
  line-height: 75px;
}
#announcement {
  h3 {
    margin-bottom: 15px;
  }
}
.img-raised {
  margin: 15px 0px;
}
#publicity {
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height: 330px;
    display: block;
    margin: 0 auto;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
#friendLink {
  font-size: 16px;
  font-family: "Microsoft Yahei", sans-serif, serif;
  letter-spacing: 1px;
  .md-layout-item {
    line-height: 30px;
  }
}
</style>
