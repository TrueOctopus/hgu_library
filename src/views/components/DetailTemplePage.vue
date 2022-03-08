<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 19:09:23
 * @LastEditTime: 2022-03-08 10:37:05
 * @LastEditors: 郑钊宇
 * @Description: 二级模板页面，通过具名插槽实现
-->
<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="headerTittle animate__animated animate__fadeInUp">
        <h4 class="tittle">{{ headerTittle }}</h4>
      </div>
      <div class="md-layout animate__animated animate__fadeInUp">
        <div class="md-layout-item md-size-100">
          <h2 class="tittle">{{ detailTittle }}</h2>
        </div>
      </div>
      <div class="dateTittle animate__animated animate__fadeInUp">
        <h4 class="tittle">
          <div class="material-icons md-light" v-if="dateTittle">
            today
          </div>
          <!-- <md-icon style="color: white">today</md-icon> -->
          {{ dateTittle }}
        </h4>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section md-layout" id="breadcrumb">
        <div class="md-layout-item md-size-10 md-small-size-5" />
        <div class="md-layout-item md-size-80">
          <slot name="breadcrumb"></slot>
        </div>
        <div class="md-layout-item md-size-10 md-small-size-5" />
      </div>

      <div class="section md-layout" id="buttons">
        <div class="md-layout-item md-size-10 md-small-size-5" />
        <div class="md-layout-item md-size-80">
          <slot name="buttons"></slot>
        </div>
        <div class="md-layout-item md-size-10 md-small-size-5" />
      </div>

      <div class="section md-layout" id="text">
        <div class="md-layout-item md-size-10 md-small-size-5" />
        <div class="md-layout-item md-size-80">
          <slot name="text"></slot>
        </div>
        <div class="md-layout-item md-size-10 md-small-size-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerImage: {
      type: String,
      default: require("@/assets/img/header.jpg")
    },
    headerTittle: String,
    detailTittle: String,
    dateTittle: String
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerImage})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  height: 50vh !important;
  h2 {
    color: rgb(255, 255, 255);
  }
  h4 {
    font-weight: 600;
    color: rgb(255, 255, 255);
    letter-spacing: 5px;
  }
}
.headerTittle {
  position: absolute;
  top: 25%;
  left: 13%;
}
.dateTittle {
  position: absolute;
  top: 68%;
  right: 13%;
  div {
    position: relative;
    top: 5px;
    left: 5px;
  }
}
#breadcrumb {
  padding: 60px 0 20px;
}
#buttons {
  padding: 0 0 10px;
}
#text {
  padding: 0 0 70px;
  p {
    font-size: 15px;
    text-indent: 30px;
  }
  img {
    display: block;
    margin: 0 auto;
    padding: 10px 0;
  }
  .signature {
    font-size: 16px;
    width: 20%;
    position: relative;
    left: 80%;
    top: 3%;
    font-weight: bold;
  }
}
</style>
