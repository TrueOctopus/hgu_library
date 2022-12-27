<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-18 15:05:37
 * @LastEditTime: 2022-03-19 11:00:24
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
  box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%),
    0 7px 10px -5px rgb(0 0 0 / 15%);
  border-radius: 3px;

  .tittle {
    text-align: center;
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
    padding-left: 5vh;
    cursor: pointer;
    &:hover {
      background-color: #00bcd4;
      color: #fff;
    }
  }
  .L1menu,
  li{

    color: #000 !important;
    border-top: 1px solid #6464642c  ;
    &:hover {
      box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%),
        0 7px 10px -5px rgb(0 0 0 / 15%);
      background-color: #00bcd4;
      color: #fff !important;
      a {
        color: #fff !important;
      }
    }
  }

  li.active {
    background-color: #00bcd4;
    a {
      color: #fff !important;
    }
    box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%),
        0 7px 10px -5px rgb(0 0 0 / 15%);
  }

  a {
    padding-left: 5vh;
    display: block;
    width: 100%;
    height: 100%;
    color: #000 !important;
  }
}
</style>
