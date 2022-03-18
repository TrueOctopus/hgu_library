<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:05:37
 * @LastEditTime: 2022-03-18 17:02:59
 * @LastEditors: 郑钊宇
 * @Description:
-->

<template>
  <div class="subNav">
    <h3 class="tittle">{{ menuTittle }}</h3>
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuTittle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.subNav {
  text-align: center;
  box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%);
  border-radius: 3px;

  .tittle {
    line-height: 10vh;
    margin-bottom: -3vh;
  }

  ul {
    padding: 0;
  }

  .L1menu,
  ul,
  li {
    font-size: 18px;
    line-height: 8vh;
  }

  .L1menu {
    cursor: pointer;
    &:hover {
      background-color: #00bcd4;
      color: #fff;
    }
  }

  li{
    color: #000 !important;
    &:hover {
      background-color: #00bcd4;
      color: #fff !important;
      a {
        color: #fff !important;
      }
    }
  }

  li.active {
      background-color: #00bcd4 ;
      color: #fff;
    }

  a {
    color: #000 !important;
  }
}
</style>
