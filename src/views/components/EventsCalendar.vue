<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-11 15:22:34
 * @LastEditTime: 2022-06-09 14:12:50
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
      <div v-if="lectureList.length !== 0">
        <div class="catalog">讲座:</div>
        <div v-for="lecture in lectureList" :key="lecture.id" class="lecture">
          <div v-if="lecture.catalog === '讲座'">
            <router-link :to="`lecture/${lecture.id}`" class="lectureTittle">{{ lecture.title }}</router-link>
            <p>{{ lecture.remark }}</p>
            <p>开始时间: {{ lecture.lecturetime }}</p>
          </div>
        </div>
      </div>
      <div v-if="lectureList.length !== 0">
        <div class="catalog">活动:</div>
        <div v-for="lecture in lectureList" :key="lecture.id" class="lecture">
          <div v-if="lecture.catalog === '活动'">
            <router-link :to="`lecture/${lecture.id}`" class="lectureTittle">{{ lecture.title }}</router-link>
            <p>{{ lecture.remark }}</p>
            <p>开始时间: {{ lecture.lecturetime }}</p>
          </div>
        </div>
      </div>
      <div v-else>当前日期没有讲座或活动~</div>
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
import { getAllDate, fetchLectureByDate } from '@/api/lecture'

export default {
  components: {
    Calendar
  },
  data() {
    return {
      markArr: [], // 标记日期
      today: '', // 今天的日期
      selectDate: '', // 选择的日期
      lectureList: [] // 日期对应的讲座或活动
    }
  },
  created() {
    getAllDate().then(res => {
      // console.log(res)
      this.markArr = res.data.allDate
    })
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
    this.getSelectDateLecture(this.today)
  },
  methods: {
    getSelectDate() { // 获取选择的日期
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
      this.getSelectDateLecture(this.selectDate)
    },
    getSelectDateLecture(date) { // 获取选择的日期的讲座或活动
      // console.log('date', date)
      fetchLectureByDate(date).then(res => {
        // console.log(res)
        this.lectureList = res.data.lecture
      })
    }
  }
}
</script>

<style lang="scss">
.wh_container {
  margin: 20px 0 0 !important;
  .wh_content_all {
    background-color: #ffffff !important;
    border: 1px solid #dfe0e6 !important;
    width: 500px;
    border-radius: 6px;
  }
  .wh_item_date {
    color: #211d48;
    &:hover {
      color: #ffffff !important;
      background: #00bcd4 !important;
      border-radius: 50%;
    }
  }
  .wh_other_dayhide {
    color: #cccccc !important;
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
    border-top: 2px solid #006370 !important;
    border-left: 2px solid #006370 !important;
  }
  .wh_jiantou2 {
    border-top: 2px solid #006370 !important;
    border-right: 2px solid #006370 !important;
  }

  .wh_content_item {
    .wh_isMark {
      background-color: #00bbd433 !important;
      /*border-radius: 0px;*/
    }
    .wh_isToday {
      background-color: #008697 !important;
      /*border-radius: 0px;*/
      color: #ffffff;
    }
    .wh_chose_day {
      background-color: #00bcd4 !important;
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
