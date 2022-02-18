<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:25:02
 * @LastEditTime: 2022-02-18 15:48:59
 * @LastEditors: 郑钊宇
 * @Description: 主页面
-->
<template>
  <div class="wrapper">
    <parallax class="page-header" :style="headerStyle">
      <!-- <el-carousel indicator-position="none" height="40rem" style="width:100%;">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel> -->

      <div class="image-wrapper">
        <div class="brand">
          <h1>河北地质大学图书馆</h1>
          <h3>HeBei GEO University Library</h3>
        </div>
      </div>
    </parallax>

    <div class="main main-raised test">
      <div class="section md-layout">
        <div class="md-layout-item md-size-10"></div>
        <div class="md-layout-item md-size-80 md-small-size-100">
          <nav-tabs-card>
            <template slot="content">
              <md-tabs class="md-info" md-alignment="fixed">
                <md-tab
                  id="tab-home"
                  md-label="馆藏目录"
                  md-icon="auto_stories"
                >
                  <p>
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </md-tab>

                <md-tab id="tab-pages" md-label="百度学术" md-icon="edit">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                </md-tab>

                <md-tab
                  id="tab-posts"
                  md-label="超星发现"
                  md-icon="saved_search"
                >
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </md-tab>

                <md-tab id="tab-posts1" md-label="我的图书馆" md-icon="face">
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    NavTabsCard
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/header.jpg")
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

<style scoped>
.test {
  height: 1000px;
  /* background-color: rgb(201, 201, 201); */
}

/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("../assets/img/header.jpg");
  background-repeat: no-repeat;
} */
</style>
