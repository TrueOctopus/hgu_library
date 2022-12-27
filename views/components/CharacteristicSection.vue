<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-14 09:30:09
 * @LastEditTime: 2022-04-27 19:40:21
 * @LastEditors: 郑钊宇
 * @Description: 特色资源选项卡
-->
<template>
  <div class="md-layout">
    <div
      class="characteristicSection section-open"
      :style="`background-image: url(${require('@/assets/img/characteristic/li.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">李廷栋</div>
      <div class="text">
        <p>李廷栋，1930年10月7日出生于河北栾城县，地质学家，中国科学院院士，国土资源部咨询研究中心和中国地质科学院研究员。</p>
        <p>李廷栋于1953年从北京地质学院毕业后被分配到地质部机关；1954年被派赴冶金部成矿理论学习班；1965年被调任地质部川西地质综合研究队队长，赴川西进行地质调查；1980年担任中国地质科学院院长；1986年调任地质矿产部副总工程师；1993年当选为中国科学院院士；1998年担任中国科学院地学部副主任。
        </p>
        <p>李廷栋主要从事区域地质研究和地质编图，主持或参加了大兴安岭北部、四川西部、喜马拉雅和青藏高原等地区地质调查研究，主持完成了南极岩石圈构造及矿产资源潜力的研究。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/hou.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">侯增谦</div>
      <div class="text">
        <p>侯增谦，1961年6月出生于河北省藁城市，矿床地质学家，中国科学院院士、中国地质科学院地质研究所研究员、所长，第八届国家自然科学基金委员会副主任、党组成员。
        </p>
        <p>侯增谦于1982年从河北地质学院(现河北地质大学)地质系毕业；1985年获得武汉地质学院（现中国地质大学)北京研究生部硕士学位；1988年获得中国地质大学（北京）研究生院博士学位，之后进入中国地质科学院矿床地质研究所工作，先后担任助理研究员、副研究员、研究员、科技处长；
          1996年入选“跨世纪人才工程”；2000年至2005年担任中国地质科学院矿产资源所副所长；2004年获得国家杰出青年科学基金资助；2005年担任中国地质科学院地质研究所所长；2017年当选为中国科学院院士；2018年担任第八届国家自然科学基金委员会副主任。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/wu.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">武强</div>
      <div class="text">
        <p>
          武强，1959年10月10日出生于内蒙古呼和浩特市，水文地质环境地质学家，中国工程院院士、国际欧亚科学院院士，中国矿业大学（北京）教授、博士生导师，国家煤矿水害防治工程技术研究中心主任。
        </p>
        <p>
          武强于1982年从河北地质学院水文地质专业毕业后留校任教；1985年考取中国地质大学（北京）水文地质专业研究生，先后获得硕士、博士学位；
          1992年博士毕业后进入中国矿业大学（北京）任教；1995年至1997年前往荷兰国际水力与环境工程学院，担任访问学者；2000年获得国家教育部跨世纪优秀人才基金资助；2015年当选为中国工程院院士；2021年当选为国际欧亚科学院院士。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/chen.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">成秋明</div>
      <div class="text">
        <p>成秋明，1960年3月生，中国地质大学（北京）教授、博士生导师，国家杰出青年科学基金获得者，中国地质调查局“李四光学者”，地质过程与矿产资源国家重点实验室主任，国际地质科学联合会主席，国际数学地球科学协会前主席（2012-2016）。
          研究领域：数学地质、矿产普查与勘探，欧洲科学院院士。
        </p>
        <p>2019年11月22日，当选中国科学院院士。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/mao.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">毛景文</div>
      <div class="text">
        <p>毛景文，中国地质科学院研究生院博士，中国工程院院士。中国地质科学院矿产资源研究所研究员、国土资源部成矿作用与资源评价重点实验室主任和中国地质学会矿床专业委员会主任。</p>
        <p>现任紫金矿业独立董事，董事会战略与可持续发展（ESG）委员会委员、提名与薪酬委员会委员。</p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/xie.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">谢玉洪</div>
      <div class="text">
        <p>谢玉洪，1961年2月生，教授级高级工程师。油气勘探和工程管理专家，享受国务院政府特殊津贴，李四光地质科学奖获得者。
          1982年毕业于河北地质学院(现河北地质大学)，获工学学士学位；2005年6月毕业于中国地质大学（武汉），获理学博士学位。
          国家能源深水油气工程技术研发中心理事，广东石油学会理事长，广东省企业联合会副会长，广东省科协学术委员会委员。
        </p>
        <p>现任中国海洋石油集团有限公司总地质师。</p>
        <p>2021年11月18日，当选为中国工程院院士。</p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>
  </div>
</template>

<script>
export default {
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
  background-size: cover;
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
    font-weight: bold;
    position: absolute;
    top: 20px;
    left: 80px;
    padding-right: 20px;
    filter: opacity(0);
    // width: 450px;
    transition: filter .1s ease-out;
    p {
      font-size: 16px;
    }
  }
  .btn {
    position: absolute;
    bottom: .3rem;
    right: 1rem;
    filter: opacity(0);
    transition: filter .1s ease-out;
  }
}
.characteristicSection.section-open {
  width: 60%;
  .text {
    filter: opacity(1);
    transition: filter .6s cubic-bezier(1, -0.04, 0.69, 0.14);
  }
  .btn {
    filter: opacity(1);
    transition: filter .6s cubic-bezier(1, -0.04, 0.69, 0.14);
  }
}

@media (min-width: 750px) {
  .characteristicSection {
    height: 610px;
  }
}
</style>
