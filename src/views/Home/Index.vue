<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:34:22
 * @LastEditTime: 2022-06-09 14:20:27
 * @LastEditors: 郑钊宇
 * @Description: 主页
-->
<template>
  <div id="wrapper" class="wrapper">
    <AnchorNav :column-type="columnType" />
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout" style="width:99%">
        <!-- 头部部分 选项卡与快捷入口 -->
        <div class="image-wrapper" style="width:99%">
          <div class="brand">
            <!-- <div class="md-layout-item md-size-100 md-small-size-100">
                <h1>河北地质大学图书馆</h1>
                <h3>HeBei GEO University Library</h3>
              </div> -->
            <div
              id="tabsNav"
              ref="tabsNav"
              class="md-layout animate__animated animate__fadeInUp"
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

                    <md-tab id="tab-pages2" md-label="百链搜索" md-icon="edit">
                      <p>
                        <el-form
                          ref="medaLinkSearchForm"
                          :model="medaLinkSearchForm"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="medaLinkSearchForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm(`https://jour.blyun.com/searchJour?Field=all&channel=searchJour&sw=${medaLinkSearchForm.searchWords}&ecode=utf-8&edtype=&searchtype=&view=0`)"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('medaLinkSearchForm')"
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
                          ref="duxiuSearchForm"
                          :model="duxiuSearchForm"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="duxiuSearchForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm(`https://jour.duxiu.com/searchJour?Field=all&channel=searchJour&sw=${duxiuSearchForm.searchWords}&ecode=utf-8&edtype=&searchtype=&view=0`)"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('duxiuSearchForm')"
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
                          ref="zlfSearchForm"
                          :model="zlfSearchForm"
                          :inline="true"
                          label-width="100px"
                          class="formStyle"
                        ><el-form-item label="检索词" prop="searchWords">
                           <el-input
                             v-model="zlfSearchForm.searchWords"
                             class="single-input"
                           />
                         </el-form-item>
                          <el-form-item>
                            <md-button
                              class="md-info"
                              @click="submitForm(`http://zlf.cqvip.com/zk/search.aspx?from=index&key=U%3D${zlfSearchForm.searchWords}`)"
                            >开始搜索</md-button>
                            <md-button
                              @click="resetForm('zlfSearchForm')"
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
                              @click="submitForm(`https://opac.hgu.edu.cn/reader/redr_verify.php`)"
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
                    <div style="overflow: hidden">
                      中文资源:
                      <a v-for="item in databaseList.cn" :key="item.id" :href="item.urladdress">
                        {{ item.urlname }}
                      </a>
                      <a class="more" href="/resouce/cn">更多>></a>
                    </div>
                    <div>
                      外文资源:
                      <a v-for="item in databaseList.foreign" :key="item.id" :href="item.urladdress">
                        {{ item.urlname }}
                      </a>
                      <a class="more" href="/resouce/foreign">更多>></a>
                    </div>
                    <div>
                      试用资源:
                      <a v-for="item in databaseList.try" :key="item.id" :href="item.urladdress">
                        {{ item.urlname }}
                      </a>
                      <a class="more" href="/resouce/try">更多>></a>
                    </div>
                    <div>
                      开放资源:
                      <a v-for="item in databaseList.open" :key="item.id" :href="item.urladdress">
                        {{ item.urlname }}
                      </a>
                      <a class="more" href="/resouce/open">更多>></a>
                    </div>
                  </div>
                </template>
              </nav-tabs-card>
              <div class="md-layout-item md-size-10" />
            </div>
            <div
              class="md-layout animate__animated animate__fadeInUp"
            >
              <div class="md-layout-item md-size-10" />
              <div class="res-btns md-layout md-layout-item md-size-80">
                <div class="md-layout md-layout-item md-size-100 md-gutter">
                  <div class="md-layout-item md-size-5" />
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="schedule" url="/service/opentime" text="开放时间" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="chair_alt" url="/service/seatOrder" text="座位预约" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="local_library" url="/service/labOrder" text="研修室预约" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="format_list_bulleted" url="/studysupport/admissionEducation" text="入馆须知" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="book" url="/service/borrowRules" text="图书续借" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="collections_bookmark" text="资源荐购" />
                  </div>
                </div>
                <div class="md-layout md-layout-item md-size-100 md-gutter">
                  <div class="md-layout-item md-size-5" />
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="school" url="/resouce/offcampus" text="校外访问" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="storage" url="/resouce/all" text="数据库" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="dashboard" url="/resouce/collection" text="馆藏布局" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="3p" url="/announcement/lecture" text="培训讲座" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="bookmark_add" url="/reading/bookReport" text="新书通报" />
                  </div>
                  <div class="md-layout-item md-size-15">
                    <ResBtn icon-name="volunteer_activism" url="/service/donation" text="捐赠" />
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
      <!-- 新闻公告部分 -->
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
                v-for="item in newsList.news"
                :key="item.id"
                :news-type-index="newsOption.indexOf(item.catalog)"
                :tittle="item.title"
                :date="item.releasetime.substring(5, 10)"
                :news-id="item.id"
              />
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50 newsImage">
                <img
                  :src="newsImage[0]?newsImage[0].image:image"
                  :alt="newsImage[0]?newsImage[0].title:'default'"
                  class="img-raised rounded"
                  style="cursor: pointer"
                  @click="$router.push('/announcement/' + newsImage[0].id)"
                >
                <div v-if="newsImage[0]">{{ newsImage[0].title }}</div>
              </div>
              <div class="md-layout-item md-size-50 newsImage">
                <img
                  :src="newsImage[1]?newsImage[1].image:image"
                  :alt="newsImage[1]?newsImage[1].title:'default'"
                  class="img-raised rounded"
                  style="cursor: pointer"
                  @click="$router.push('/announcement/' + newsImage[1].id)"
                >
                <div v-if="newsImage[1]">{{ newsImage[1].title }}</div>
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
                v-for="item in newsList.resource"
                :key="item.id"
                :news-type-index="newsOption.indexOf(item.catalog)"
                :tittle="item.title"
                :date="item.releasetime.substring(5, 10)"
                :news-id="item.id"
              />
            </div>
            <div class="md-layout-item md-size-50 md-layout md-small-hide">
              <div class="md-layout-item md-size-50 newsImage">
                <img
                  :src="newsImage[2]?newsImage[2].image:image"
                  alt="Raised Image"
                  class="img-raised rounded"
                  style="cursor: pointer"
                  @click="$router.push('/announcement/' + newsImage[2].id)"
                >
                <div v-if="newsImage[2]">{{ newsImage[2].title }}</div>
              </div>
              <div class="md-layout-item md-size-50 newsImage">
                <img
                  :src="newsImage[3]?newsImage[3].image:image"
                  alt="Raised Image"
                  class="img-raised rounded"
                  style="cursor: pointer"
                  @click="$router.push('/announcement/' + newsImage[3].id)"
                >
                <div v-if="newsImage[3]">{{ newsImage[3].title }}</div>
              </div>
            </div>
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>
      </div>
      <!-- 图书推广部分 -->
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
              to="/reading/recommendedReading"
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
      <!-- 讲座预约部分 -->
      <div id="lecture" ref="lecture" class="section" :style="bgImage">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout md-content">
            <h3 class="md-layout-item md-size-90 tittle">活动讲座</h3>
            <router-link
              to="/announcement/lecture"
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
      <!-- 特色资源部分 -->
      <div id="characteristic" ref="characteristic" class="section">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-90 tittle">特色资源</h3>
            <router-link
              to="/resouce/characteristic"
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
      <!-- 友情链接部分 -->
      <div id="friendLink" ref="friendLink" class="section section-tabs">
        <div class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div class="md-layout-item md-size-80 md-layout">
            <h3 class="md-layout-item md-size-100 tittle">友情链接</h3>
            <div class="md-layout-item md-size-25 ">
              <a href="http://www.nlc.gov.cn/">国家图书馆</a>
              <br>
              <a href="http://www.cgl.org.cn/">中国地质图书馆</a>
              <br>
              <a href="http://lib.pku.edu.cn/portal/">北京大学图书馆</a>
            </div>
            <div class="md-layout-item md-size-25 ">
              <a href="http://lib.jlu.edu.cn/">吉林大学图书馆</a>
              <br>
              <a href="http://www.lib.cug.edu.cn/">中国地质大学图书馆</a>
              <br>
              <a href="https://lib.csu.edu.cn/">中南大学图书馆</a>
            </div>
            <div class="md-layout-item md-size-25 ">
              <a href="https://lib.chd.edu.cn">长安大学图书馆</a>
              <br>
              <a href="https://lib.web.hebust.edu.cn/">河北科技大学图书馆</a>
              <br>
              <a href="http://library.hebtu.edu.cn/">河北师范大学图书馆</a>

            </div>
            <div class="md-layout-item md-size-25 ">
              <a href="http://lib.hebut.edu.cn/">河北工业大学图书馆</a>
              <br>
              <a href="http://lib.hbu.edu.cn/">河北大学图书馆</a>
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
import NewsElem from '../News/components/NewsElement.vue'
import AnchorNav from '../components/AnchorNav.vue'
import EventsCalendar from '../components/EventsCalendar.vue'
import PublicitySection from '../components/BooksPublicitySection.vue'
import CharacteristicSection from '../components/CharacteristicSection.vue'

import { fetchDatabaseList } from '@/api/resource'
import { fetchNewsList, fetchResourcesList, newsOption, fetchReleaseNewsList } from '@/api/news'
import { getPic } from '@/api/file'
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
    }, // 头部图片
    image: {
      type: String,
      default: require('@/assets/img/cynthia-del-rio.jpg')
    }, // 背景图片
    resourseImage: {
      type: String,
      default: require('@/assets/img/profile_city.jpg')
    } // 资源图片
  },
  data() {
    return {
      newsOption,
      databaseList: {
        cn: [], // 中文数据库
        foreign: [], // 外文数据库
        try: [], // 试用数据库
        open: [] // 开放数据库
      }, // 数据库列表
      newsList: {
        news: [], // 新闻列表
        resource: [] // 资源信息列表
      }, // 新闻列表
      newsImage: [], // 新闻图片
      docForm: {
        strText: '', // 文本内容
        docType: 'ALL' // 文档类型
      }, // 文档搜索表单
      medaLinkSearchForm: {
        searchWords: ''
      }, // 百链搜索表单
      duxiuSearchForm: {
        searchWords: ''
      }, // 独秀搜索表单
      zlfSearchForm: {
        searchWords: ''
      }, // 维普智立方搜索表单
      readerCardForm: {
        readerCardNumber: '',
        readerCardPassword: ''
      }, // 读者证搜索表单
      columnType: 0 // 栏目类型
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerImage})`
      }
    }, // 头部图片样式
    bgImage() {
      return {
        backgroundImage: `url(${this.resourseImage})`
      }
    } // 背景图片样式
  },
  created() {
    fetchDatabaseList().then(response => {
      // 获取数据库列表
      // console.log(response)
      response.data.databaseList.forEach(ele => {
        switch (ele.genre) {
          case '中文':
            if (this.databaseList.cn.length > 4) break
            this.databaseList.cn.push(ele)
            break
          case '外文':
            if (this.databaseList.foreign.length > 4) break
            this.databaseList.foreign.push(ele)
            break
          case '试用':
            if (this.databaseList.try.length > 4) break
            this.databaseList.try.push(ele)
            break
          case '开放':
            if (this.databaseList.open.length > 4) break
            this.databaseList.open.push(ele)
            break
          case '中外文':
            if (this.databaseList.cn.length <= 4) this.databaseList.cn.push(ele)
            if (this.databaseList.foreign.length <= 4) this.databaseList.foreign.push(ele)
            break
        }
      })
    })
    fetchReleaseNewsList(1, 1000).then(response => {
      // 获取新闻列表
      const newslist = response.data.news.list
      newslist.forEach(ele => {
        if (ele.picture) {
          const temp = { id: ele.id, image: getPic + ele.picture, title: ele.title }
          this.newsImage.push(temp)
        }
        if (this.newsImage.length >= 4) return
      })
      // console.log('NewsList', response, newslist)
      // console.log('NewsList', this.newsImage)
    })

    fetchNewsList(1, 8).then(response => {
      // 获取新闻列表
      // console.log('NewsList', response)
      this.newsList.news = response.data.news.list
    })

    fetchResourcesList(1, 8).then(response => {
      // 获取资源列表
      // console.log(response)
      this.newsList.resource = response.data.news.list
    })
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
   font-weight: bold;
   color: #04aac0;
   height: 36vh;
 }

.resourceSimple {
  a {
    padding-left: 1vh;
    color: #000;
    font-weight: normal;
    &:hover {
      color: #00bcd4 !important;
    }
  }
  // a {
  //   padding-left: 1vh;
  //   color: #ababab;
  //   &:hover {
  //     color: #00bcd4 !important;
  //   }
  // }
  position: relative;
  top: -1.2rem;
  left: 2rem;
}

 .more {
   color: #ababab !important;
   font-weight: bold;
   float: right;
   margin-right: 8vh;
 }
}
.res-btns {
  div {
    padding: 0;
    padding-left: 0.5rem;
    .md-layout-item {
      padding: 0;
    }
  }
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
}
.newsImage {
  height: 35vh;
  img {
    width: 100%;
    height: 75%;
  }
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
  a {
    color: #000 !important;
    &:hover {
      color: #00bcd4 !important;
    }
  }

  font-size: 16px;
  font-family: "Microsoft Yahei", sans-serif, serif;
  letter-spacing: 1px;
  .md-layout-item {
    line-height: 30px;
  }
}
</style>
<style lang="scss">
.md-tabs-navigation .md-button {
  font-size: 14px !important;
}
</style>
