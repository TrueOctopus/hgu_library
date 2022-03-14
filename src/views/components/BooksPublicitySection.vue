<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-14 17:26:09
 * @LastEditTime: 2022-03-14 17:34:27
 * @LastEditors: 郑钊宇
 * @Description: 阅读推广
-->
<template>
  <el-carousel
    :interval="3000"
    type="card"
    height="434px"
    indicator-position="none"
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
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 16px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 16px;
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
</style>
