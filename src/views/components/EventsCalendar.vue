<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-11 15:22:34
 * @LastEditTime: 2022-03-15 19:48:29
 * @LastEditors: 郑钊宇
 * @Description: 活动日历
-->
<template>
  <div class="content md-layout" @click="getSelectDate">
    <div class="md-layout-item md-size-50">
      <div class="tittle">
        <span v-if="selectDate === '' || selectDate === today">今日</span>
        <span v-if="selectDate !== today">{{ selectDate }}</span> 活动与讲座：
      </div>
      <div class="lecture">
        <a href="#" class="lectureTittle">{{ lecture.tittle }}</a>
        <p>{{ lecture.text }}</p>
        <p>{{ lecture.time }}</p>
      </div>
      <div class="lecture">
        <a href="#" class="lectureTittle">{{ lecture.tittle }}</a>
        <p>{{ lecture.text }}</p>
        <p>{{ lecture.time }}</p>
      </div>
      <div class="lecture">
        <a href="#" class="lectureTittle">{{ lecture.tittle }}</a>
        <p>{{ lecture.text }}</p>
        <p>{{ lecture.time }}</p>
      </div>
    </div>
    <Calendar
      ref="Calendar"
      class="md-layout-item md-size-50"
      :mark-date="markArr"
    />
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
  components: {
    Calendar
  },
  data() {
    return {
      markArr: ['2022/03/06', '2022/3/3', '2022/3/4', '2022/3/5'],
      today: '',
      selectDate: '',
      lecture: {
        tittle: '一个测试用的讲座标题',
        text:
          '一个测试用的讲座介绍，一个测试用的测试人员来进行一个测试的讲座!一个测试用的讲座介绍，一个测试用的测试人员来进行一个测试的讲座',
        time: '2022/03/11 15:00'
      }
    }
  },
  mounted() {
    const nowDate = new Date()
    const year = nowDate.getFullYear()
    const month =
      nowDate.getMonth() + 1 < 10
        ? '0' + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1
    const day =
      nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate()
    this.today = year + '/' + month + '/' + day
  },
  methods: {
    getSelectDate() {
      let day = document.getElementsByClassName('wh_chose_day')
      if (day.length === 0) {
        return
      }
      if (day[0].innerText < 10) {
        day = '0' + day[0].innerText
      } else {
        day = day[0].innerText
      }
      let yearMonth = document.getElementsByClassName('wh_content_li')[0]
        .innerText
      if (yearMonth.split('年')[1].split('月')[0] < 10) {
        yearMonth = yearMonth.replace('年', '/0')
      } else {
        yearMonth = yearMonth.replace('年', '/')
      }
      yearMonth = yearMonth.replace('月', '/')
      this.selectDate = yearMonth + day
    }
  }
}
</script>

<style lang="scss">
.wh_container {
  margin: 20px 0 0 !important;
  .wh_content_all {
    background-color: #ffffff !important;
    border: 1px solid #dfe0e6;
    width: 500px;
    border-radius: 6px;
  }
  .wh_item_date {
    color: #211d48;
    &:hover {
      color: #ffffff;
      background: #00bcd4;
      border-radius: 50%;
    }
  }
  .wh_other_dayhide {
    color: #cccccc;
  }
  .wh_content_item {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .wh_content {
    color: black;
  }
  .wh_top_tag {
    color: black;
  }
  .wh_content_li {
    color: #006370 !important;
    font-weight: bold;
  }
  .wh_jiantou1 {
    border-top: 2px solid #006370;
    border-left: 2px solid #006370;
  }
  .wh_jiantou2 {
    border-top: 2px solid #006370;
    border-right: 2px solid #006370;
  }

  .wh_content_item {
    .wh_isMark {
      background-color: #00bbd433;
      /*border-radius: 0px;*/
    }
    .wh_isToday {
      background-color: #008697;
      /*border-radius: 0px;*/
      color: #ffffff;
    }
    .wh_chose_day {
      background-color: #00bcd4;
      /*border-radius: 0px;*/
      color: #ffffff;
    }
  }
}
.lecture {
  margin-top: 1.7vh;
  width: 90%;
  .lectureTittle {
    font-weight: bold;
    color: #000 !important;
    &:hover {
      color: #00bcd4 !important;
    }
  }
}
</style>
