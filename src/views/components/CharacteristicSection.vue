<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-14 09:30:09
 * @LastEditTime: 2022-04-02 18:45:38
 * @LastEditors: 郑钊宇
 * @Description: 特色资源选项卡
-->
<template>
  <div class="md-layout">
    <div
      class="characteristicSection section-open"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>

    <div
      class="characteristicSection"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>

    <div
      class="characteristicSection"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>

    <div
      class="characteristicSection"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>

    <div
      class="characteristicSection"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>

    <div
      class="characteristicSection"
      :style="sectionStyle"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">这是一个测试标题</div>
      <div class="text">
        这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！这是一个测试内容！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: require('@/assets/img/bg3.jpg')
    }
  },
  computed: {
    sectionStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    }
  },
  methods: {
    showInfo(e) {
      const section = Array.from(document.getElementsByClassName('characteristicSection'))
      section.forEach(ele => {
        ele.classList.remove('section-open')
      })
      e.currentTarget.classList.add('section-open')
    }
  }
}
</script>

<style lang="scss" scoped>
.characteristicSection {
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  height: 450px;
  width: 8%;
  transition: width 0.5s ease;
  color: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  .portrait {
    position: relative;
    width: 40px;
    left: 25px;
    line-height: 110%;
    font-size: 30px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    font-weight: bold;
    top: 5%;
    transition: top 0.3s ease;

    &:hover {
      top: 10%;
    }
  }
  .text {
    position: absolute;
    top: 80px;
    left: 120px;
    font-size: 18px;
    width: 450px;
  }
}
.characteristicSection.section-open {
  width: 60%;
}
</style>
