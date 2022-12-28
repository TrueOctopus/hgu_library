<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-06 19:09:23
 * @LastEditTime: 2022-05-27 10:15:47
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
          <div v-if="dateTittle" class="material-icons md-light">
            today
          </div>
          <!-- <md-icon style="color: white">today</md-icon> -->
          {{ dateTittle }}
        </h4>
      </div>
    </parallax>
    <div class="main main-raised">
      <div id="breadcrumb" class="section md-layout">
        <div class="md-layout-item md-size-10 md-small-size-5" />
        <div class="md-layout-item md-size-80">
          <slot name="breadcrumb" />
        </div>
        <div class="md-layout-item md-size-10 md-small-size-5" />
      </div>

      <div>
        <div v-if="$slots.subNav" class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5 md-small-hide" />
          <div id="subNav" class="md-layout-item md-size-15 md-small-hide">
            <slot name="subNav" />
          </div>
          <div class="md-layout-item md-size-5 md-small-size-5 md-small-hide" />
          <div id="text" class="md-layout-item md-size-70 md-small-size-100">
            <slot name="text" />
          </div>
        </div>

        <div v-else class="md-layout">
          <div class="md-layout-item md-size-10 md-small-size-5" />
          <div id="text" class="md-layout-item md-size-80">
            <slot name="text" />
          </div>
          <div class="md-layout-item md-size-10 md-small-size-5" />
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerImage: {
      type: String,
      default: require('@/assets/img/header.jpg')
    },
    headerTittle: {
      type: String,
      default: ''
    },
    detailTittle: {
      type: String,
      default: ''
    },
    dateTittle: {
      type: String,
      default: ''
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.headerImage})`
      }
    }
  }
}
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
  top: 30%;
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
</style>

<style lang="scss">
.container p {
  line-height: 1.8;
  font-size: medium;
  white-space: normal;
  margin: 10px 0;
  text-indent: 2em;
}
#breadcrumb {
  padding: 60px 0 20px;
}
#subNav {
  padding: 0 0 10px;
}
#text {
  padding-bottom: 10vh;
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }
  h3 {
    font-size: 1.33em;
    font-weight: 600;
  }
  h4 {
    font-size: 1.17em;
    font-weight: 400;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.67em;
  }
}
</style>
