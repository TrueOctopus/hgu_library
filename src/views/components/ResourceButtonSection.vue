<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-19 14:34:07
 * @LastEditTime: 2022-05-16 22:02:47
 * @LastEditors: 郑钊宇
 * @Description: 资源快速入口按钮
-->
<template>
  <div class="ResouceBtn">
    <a class="md-layout res-btn" :href="url">
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
  props: {
    iconName: {
      type: String,
      default: 'home'
    },
    url: {
      type: String,
      default: 'javascript:void(0)'
    },
    text: {
      type: String,
      default: 'fault text'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.ResouceBtn {
  display: flex;
  justify-content: center;
}
.res-btn {
  margin: 10px 15px;
  width: 16vh;
  height: 90%;
  background-color: #00bcd4;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0px rgb(0 0 0 / 18%);
  &:hover {
    box-shadow: 0 5px 20px 0px rgb(0 0 0 / 20%),
      0 13px 24px -11px rgb(0 188 212 / 60%);
  }
}
.material-icons {
  font-size: 55px;
  margin-top: 2vh;
}
.md-light {
  color: rgba(255, 255, 255, 1);
}
.res-tittle {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
}
</style>
