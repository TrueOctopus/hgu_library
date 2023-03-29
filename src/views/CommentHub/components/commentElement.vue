<!--
 * @Author: 郑钊宇
 * @Date: 2022-04-09 16:40:13
 * @LastEditTime: 2022-04-10 09:45:00
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="md-layout commentSection">
    <div class="md-layout md-layout-item md-size-100">
      <div class="md-layout-item md-size-100 commenter">来自 {{ commenter }} 的留言:</div>
      <div class="message">{{ message }}</div>
    </div>

    <div class="md-layout md-layout-item md-size-100 res">
      <div class="md-layout-item md-size-100 responder">来自 {{ responder }} 的答复:</div>
      <div class="reply">{{ replay }}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    commenter: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    responder: {
      type: String,
      default: ''
    },
    replay: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.commentSection {
  width: 80%;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%),
    0 7px 10px -5px rgb(0 0 0 / 15%);
  margin-top: 20px;
  margin-bottom: 20px;

  .responder,
  .commenter {
    font-size: 0.95em;
    font-weight: bold;
    color: rgb(0 0 0 / 60%);
    padding: 0;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .responder {
    text-align: right;
  }
  .reply,
  .message {
    // overflow-wrap: break-word;
    word-wrap: break-word;
    background-color: #00bcd4;
    color: #fff;
    font-size: 1em;
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
    box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%),
    0 7px 10px -5px rgb(0 0 0 / 15%);
    max-width: 80%;
  }
  .reply {
    border-radius: 10px 0px 10px 10px;
  }
  .res {
    justify-content: flex-end;
  }
}
</style>
