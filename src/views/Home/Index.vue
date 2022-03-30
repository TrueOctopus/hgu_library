<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-03-29 16:59:40
 * @LastEditors: 郑钊宇
 * @Description: 主页
-->
<template>
  <div id="wrapper" class="wrapper">
    <AnchorNav :column-type="columnType" />
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout" style="width:99%">
        <div class="image-wrapper" style="width:99%">
          <div class="brand">
            <!-- <div class="md-layout-item md-size-100 md-small-size-100">
                <h1>河北地质大学图书馆</h1>
                <h3>HeBei GEO University Library</h3>
              </div> -->
            <div
              id="tabsNav"
              ref="tabsNav"
              class="md-layout animate__animated animate__slow animate__fadeInUp"
            >
              <div class="md-layout-item md-size-10" />
              <nav-tabs-card
                id="header-tabs"
                no-label
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
                          ref="docForm"
                          :model="docForm"
                          :rules="rules"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="文献类型" prop="docType">
                           <el-select
                             v-model="docForm.docType"
                             placeholder="请选择文献类型"
                           >
                             <el-option
                               label="所有书刊"
                               value="ALL"
                             />
                             <el-option
                               label="中文图书"
                               value="01"
                             />
                             <el-option
                               label="西文图书"
                               value="02"
                             />
                             <el-option
                               label="中文期刊"
                               value="11"
                             />
                             <el-option
                               label="西文期刊"
                               value="12"
                             />
                           </el-select>
                         </el-form-item>
                          <el-form-item label="文献题名" prop="docName">
                            <el-input v-model="docForm.strText" />
                          </el-form-item>

                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm(`https://opac.hgu.edu.cn/opac/openlink.php?doctype=${docForm.docType}&strText=${docForm.strText}&simple=mode&strSearchType=title&match_flag=forward&displaypg=20&sort=CATA_DATE&orderby=desc&showmode=list&dept=ALL&submit=%25E6%25A3%2580%25E7%25B4%25A2`)"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('docForm')"
                            >重置</md-button>
                          </el-form-item>
                        </el-form>
                      </p>
                    </md-tab>

                    <md-tab id="tab-pages2" md-label="中国知网（CNKI）" md-icon="edit">
                      <p>
                        <el-form
                          ref="cnkiSearchForm"
                          :model="cnkiSearchForm"
                          :rules="rules"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="cnkiSearchForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm()"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('cnkiSearchForm')"
                            >重置</md-button>
                          </el-form-item>
                        </el-form>
                      </p>
                    </md-tab>

                    <md-tab
                      id="tab-pages3"
                      md-label="读秀学术"
                      md-icon="saved_search"
                    >
                      <p>
                        <el-form
                          ref="chaoXingForm"
                          :model="chaoXingForm"
                          :rules="rules"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="chaoXingForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm('chaoXingForm')"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('chaoXingForm')"
                            >重置</md-button>
                          </el-form-item>
                        </el-form>
                      </p>
                    </md-tab>

                    <md-tab
                      id="tab-pages4"
                      md-label="维普智立方"
                      md-icon="widgets"
                    >
                      <p>
                        <el-form
                          ref="chaoXingForm"
                          :model="chaoXingForm"
                          :rules="rules"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="chaoXingForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm('chaoXingForm')"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('chaoXingForm')"
                            >重置</md-button>
                          </el-form-item>
                        </el-form>
                      </p>
                    </md-tab>

                    <md-tab
                      id="tab-pages5"
                      md-label="我的图书馆"
                      md-icon="face"
                    >
                      <p>
                        <el-form
                          ref="readerCardForm"
                          :model="readerCardForm"
                          :rules="rules"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item
                           label="读者证号"
                           prop="readerCardNumber"
                         >
                           <el-input
                             v-model="readerCardForm.readerCardNumber"
                             autocomplete="off"
                           />
                         </el-form-item>
                          <el-form-item label="密码" prop="readerCardPassword">
                            <el-input
                              v-model="readerCardForm.readerCardPassword"
                              autocomplete="off"
                              type="password"
                              placeholder="默认与证件号相同"
                            />
                          </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm('readerCardForm')"
                            >登录</md-button>
                            <md-button
                              @click="resetForm('readerCardForm')"
                            >重置</md-button>
                          </el-form-item>
                        </el-form>
                      </p>
                    </md-tab>
                  </md-tabs>

                  <div class="resourceSimple">
                    <div>
                      中文资源:
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a class="more" href="javascript:void(0)">更多>></a>
                    </div>
                    <div>
                      外文资源:
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a class="more" href="javascript:void(0)">更多>></a>
                    </div>
                    <div>
                      试用资源:
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a class="more" href="javascript:void(0)">更多>></a>
                    </div>
                    <div>
                      开发资源:
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a href="javascript:void(0)">CNKI(北京)</a>
                      <a class="more" href="javascript:void(0)">更多>></a>
                    </div>
                  </div>
                </template>
              </nav-tabs-card>
              <div class="md-layout-item md-size-10" />
            </div>
            <div
              class="md-layout animate__animated animate__slow animate__fadeInUp animate__delay-1s"
            >
              <div class="md-layout-item md-size-10" />
              <div class="res-btns md-layout md-layout-item md-size-80">
                <div class="md-layout md-layout-item md-size-100">
                  <div class="md-layout-item">
                    <ResBtn icon-name="schedule" text="开放时间" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="chair_alt" text="座位预约" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="local_library" text="研修室预约" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn
                      icon-name="format_list_bulleted"
                      text="入馆须知"
                    />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="book" text="图书续借" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn
                      icon-name="collections_bookmark"
                      text="资源荐购"
                    />
                  </div>
                </div>
                <div class="md-layout md-layout-item md-size-100">
                  <div class="md-layout-item">
                    <ResBtn icon-name="school" text="校外访问" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="storage" text="数据库" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="dashboard" text="馆藏布局" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="3p" text="培训讲座" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="bookmark_add" text="新书通报" />
                  </div>
                  <div class="md-layout-item">
                    <ResBtn icon-name="volunteer_activism" text="捐赠" />
                  </div>
                </div>
              </div>
              <div class="md-layout-item md-size-10" />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div id="announcement" ref="announcement" class="section">
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
                :news-type-index="1"
                tittle="这是一段测试文字"
                date="03/03"
                news-id="1"
              />
              <NewsElem
                :news-type-index="4"
                tittle="这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="0"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="0"
                tittle="这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="4"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="1"
                tittle="这是一段测试文字"
                date="12/13"
              />
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                >
              </div>
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                >
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
                :news-type-index="3"
                tittle="这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="2"
                tittle="这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="2"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="3"
                tittle="这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="3"
                tittle="这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字"
                date="03/03"
              />
              <NewsElem
                :news-type-index="3"
                tittle="这是一段测试文字"
                date="12/13"
              />
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                >
              </div>
              <div class="md-layout-item md-size-50">
                <img
                  :src="image"
                  alt="Raised Image"
                  class="img-raised rounded"
                >
              </div>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div id="publicity" ref="publicity" class="section">
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
            <PublicitySection
              class="md-layout-item md-size-100"
            />
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div id="lecture" ref="lecture" class="section" :style="bgImage">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout md-content">
            <h3 class="md-layout-item md-size-90 tittle">活动讲座</h3>
            <router-link
              to="/announcement"
              class="md-layout-item md-size-10 moreClass"
            >
              更多>>
            </router-link>
            <div class="md-layout-item md-size-95">
              <EventsCalendar />
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>

      <div id="characteristic" ref="characteristic" class="section">
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

      <div id="friendLink" ref="friendLink" class="section section-tabs">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-100 tittle">友情链接</h3>
            <div class="md-layout-item md-size-25 ">
              国家图书馆<br>中国地质图书馆<br>北京大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              吉林大学图书馆<br>地质大学图书馆<br>中南大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              河北工业大学图书馆<br>河北科技大学图书馆<br>河北师范大学图书馆<br>
              河北大学图书馆
            </div>
            <div class="md-layout-item md-size-25 ">
              河北科技大学图书馆<br>河北师范大学图书馆<br>河北大学图书馆
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from '@/components'
import ResBtn from '../components/ResourceButtonSection.vue'
import NewsElem from '../components/NewsElement.vue'
import AnchorNav from '../components/AnchorNav.vue'
import EventsCalendar from '../components/EventsCalendar.vue'
import PublicitySection from '../components/BooksPublicitySection.vue'
import CharacteristicSection from '../components/CharacteristicSection.vue'

export default {
  name: 'Index',
  components: {
    NavTabsCard,
    ResBtn,
    NewsElem,
    AnchorNav,
    EventsCalendar,
    CharacteristicSection,
    PublicitySection
  },
  props: {
    headerImage: {
      type: String,
      default: require('@/assets/img/header.jpg')
    },
    image: {
      type: String,
      default: require('@/assets/img/cynthia-del-rio.jpg')
    },
    resourseImage: {
      type: String,
      default: require('@/assets/img/profile_city.jpg')
    }
  },
  data() {
    return {
      docForm: {
        strText: '',
        docType: 'ALL'
      },
      cnkiSearchForm: {
        searchWords: ''
      },
      chaoXingForm: {
        searchWords: ''
      },
      readerCardForm: {
        readerCardNumber: '',
        readerCardPassword: ''
      },
      rules: {
        strText: [
          { required: true, message: '请输入文献名称', trigger: 'change' }
        ],
        docType: [
          { required: true, message: '请选择文献区域', trigger: 'change' }
        ],
        searchWords: [
          { required: true, message: '请输入检索词', trigger: 'change' }
        ],
        readerCardNumber: [
          { required: true, message: '请输入读者证号', trigger: 'blur' },
          { min: 12, max: 12, message: '长度应为12位', trigger: 'blur' }
        ],
        readerCardPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      columnType: 0
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerImage})`
      }
    },
    bgImage() {
      return {
        backgroundImage: `url(${this.resourseImage})`
      }
    }
  },
  mounted() {
    this.$bus.$on('scrollValue', scrollValue => {
      const oneHeight = this.$refs.tabsNav.offsetHeight
      const twoHeight = this.$refs.announcement.offsetHeight + oneHeight
      const threeHeight = this.$refs.publicity.offsetHeight + twoHeight
      const fourHeight = this.$refs.lecture.offsetHeight + threeHeight
      const fiveHeight = this.$refs.characteristic.offsetHeight + fourHeight

      if (scrollValue < oneHeight) {
        this.columnType = 0
      } else if (scrollValue < twoHeight) {
        this.columnType = 1
      } else if (scrollValue < threeHeight) {
        this.columnType = 2
      } else if (scrollValue < fourHeight) {
        this.columnType = 3
      } else if (scrollValue < fiveHeight) {
        this.columnType = 4
      } else {
        this.columnType = 5
      }
    })
  },
  beforeDestroy() {
    this.$bus.$off('scrollValue')
  },
  methods: {
    submitForm(submitUrl) {
      window.location.href = submitUrl
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
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
#tabsNav {
 .md-card {
   height: 35vh;
 }

 .resourceSimple {
   a {
     padding-left: 1vh;
     color: #ababab;

     &:hover {
       color: #00bcd4 !important;
     }
   }
   margin-left: 5vh;
 }

 .more {
   font-weight: bold;
   float: right;
   margin-right: 8vh;
 }
}
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
  margin-top: 7%;
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
  padding-bottom: 40px;
  h3 {
    margin-bottom: 15px;
  }
}
.img-raised {
  margin: 15px 0px;
}

#lecture {
  background-color: #fff !important;
  .md-content {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 3px;
    box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
      0 8px 10px -5px rgb(0 0 0 / 20%);
    padding-top: 5px;
    padding-bottom: 40px;
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
