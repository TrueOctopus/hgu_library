<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-19 14:34:07
 * @LastEditTime: 2022-02-21 21:02:02
 * @LastEditors: 郑钊宇
 * @Description: 资源快速入口按钮
-->
<template>
  <div>
    <a class="md-layout res-btn" href="#">
      <div class="md-layout-item md-size-100 material-icons md-light">
        {{ iconName }}
      </div>
      <p class="md-layout-item md-size-100 res-tittle">
        {{ text }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    iconName: {
      type: String,
      default: "home"
    },
    text: {
      type: String,
      default: "fault text"
    }
  },
  methods: {}
};
</script>

<style scoped>
.res-btn {
  /* width: 120px;
  height: 120px; */
  background-color: #00bcd4;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 5px 20px 0px rgb(0 0 0 / 20%),
    0 13px 24px -11px rgb(0 188 212 / 60%);
}
.material-icons {
  font-size: 50px;
  margin-top: 20px;
}
.md-light {
  color: rgba(255, 255, 255, 1);
}
.res-tittle {
  color: #fff;
  padding: 6px 0;
}
</style>
