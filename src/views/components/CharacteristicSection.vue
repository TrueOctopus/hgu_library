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
      :style="`background-color: #00BCD4;`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">院士文库</div>
      <div class="text">
        <p>
          为传播科学思想，弘扬科学精神，院士文库收录了我校杰出校友7位院士的基本信息、履历、任职、成就贡献、学术成果等内容。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/li.jpg')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">李廷栋</div>
      <div class="text">
        <p>
          1930年10月7日出生于河北栾城县，地质学家，中国科学院院士，中国科学院学部主席团成员,国土资源部咨询研究中心和中国地质科学院研究员，河北地质大学名誉校长。 李廷栋在黑龙江流域综合考察中，在大兴安岭北部首次发现前震旦系、热河动物群与得尔布士大断裂，建立了该区地层系统和构造格架，提出本区地质构造继续性，新生性和迁移性的时空发育特点和多旋回发展过程，为尔后该区的地质调查研究奠定了基础。 李廷栋在从事区域调查和研究中，在川西首次发现早泥盆世布拉格期单笔石，重新厘定了地层系统及侵入岩分期，第一次测得宝“兴杂岩”7亿年的年龄数据，为确定扬子地台西缘“变质杂岩”时代起到先导作用。 二十世纪八十年代，李廷栋通过中法喜马拉雅地质构造合作研究，提出青藏高原“陆内俯冲—地壳分层加厚—重力均衡调查”的高原隆升模式，证实高原大幅度快速隆升始于第四纪。致力于中国地质综合研究，主持编制了中国地质图集、矿产图集等系列图件，系统总结和较全面地反映了中国及亚洲地质的时空发育规律。 在深部探测领域、开辟了新战场。我国与发达国家，在相关研究上的差距。又是30年光阴，他在深部地质探测和岩石圈研究领域深耕不辍，其成果缩短了我国与发达国家在相关研究上的差距。如今这项工作已进入收官阶段，他倾尽全力力争在明年实现32个省级地质志全部出版，向建党100周年献礼。
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
        <p>
          侯增谦于1982年从河北地质学院(现河北地质大学)地质系毕业；1985年获得武汉地质学院（现中国地质大学)北京研究生部硕士学位；1988年获得中国地质大学（北京）研究生院博士学位，之后进入中国地质科学院矿床地质研究所工作，先后担任助理研究员、副研究员、研究员、科技处长； 1996年入选“跨世纪人才工程”；2000年至2005年担任中国地质科学院矿产资源所副所长；2004年获得国家杰出青年科学基金资助；2005年担任中国地质科学院地质研究所所长；2017年当选为中国科学院院士；2018年担任第八届国家自然科学基金委员会副主任。主要从事大陆成矿理论、矿床成矿模型和勘查评价方法研究 。长期从事金属成矿理论与资源勘查技术研究，创建了碰撞造山成矿理论，阐明了大陆碰撞过程中金属富集机制和成矿机理，理论指导青藏高原找矿取得了重大突破。他长期致力于青藏高原及邻区的金属矿床地质研究，在金属成矿理论和矿产勘查评价技术方法等方面取得创新性的系统科学成果。他组织实施"青藏高原碰撞与成矿"国家973项目，系统阐释了青藏高原的成矿系统，提出了大陆碰撞成矿论，为建立全新的大陆碰撞成矿理论体系奠定了重要框架，指导了区域矿产勘查评价。系统研究了中国境内并综合对比了西亚地区斑岩铜矿，创新性提出了大陆型斑岩铜矿成矿模型，丰富和发展了斑岩铜矿成矿理论，推动了冈底斯斑岩铜矿带的找矿突破;初步查明了西南"三江"区域成矿规律，研发了银多金属矿床定位预测技术方法，为三江重大找矿突破做出了贡献;领课题组创造性地开展了区域流体地质填图，完成了中国第一幅流体地质图;在中国国内较早开辟现代海底热水成矿新领域， 详细剖析了我国火山成因块状硫化物(VMS)矿床，提出了VMS成矿新模式 。
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
          武强，1959年10月10日出生于内蒙古呼和浩特市，水文地质环境地质学家，中国工程院院士、国际欧亚科学院院士，中国矿业大学（北京）教授、博士生导师，国家煤矿灾害防治工程技术研究中心主任。武强于1982年从河北地质学院水文地质专业毕业后留校任教；1985年考取中国地质大学（北京）水文地质专业研究生，先后获得硕士、博士学位； 1992年博士毕业后进入中国矿业大学（北京）任教；1995年至1997年前往荷兰国际水力与环境工程学院，担任访问学者；2000年获得国家教育部跨世纪优秀人才基金资助；2015年当选为中国工程院院士；2021年当选为国际欧亚科学院院士。在矿山突水灾害预测预报与防治方面开创性提出了煤层底板和顶板两大类主要突水灾害预测预报的“脆弱性指数法”和“三图双预测法”，发现并提出了矿山突水的新类型和断裂构造延迟突水评价预测的一套完整研究工作方法与程序。建立了华北型煤田立体充水地质结构模式并提出区域矿床水文地质划分方案，有效指导了我国区域矿床水文地质勘探、评价预测和水害防控等工作，极大提高了其工程应用水平。提出矿山排水、供水、生态环保三位一体优化结合的经济-水力管理理论和广义与狭义两种结合模式及应用条件，为妥善解决富煤贫水整个北方矿区矿井水防治、利用、生态环保三者尖锐矛盾与冲突发挥了重要作用。研发了水文地质条件三维可视分析系统，为矿山水害防治提供了基础地质的虚拟平台。提出矿山环境问题和地质灾害评价的“三图”法理论与方法，成果解决了矿山水土流失、沙漠化和地裂缝等预测问题。
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
        <p>
          成秋明，1960年3月生，中国地质大学（北京）教授、博士生导师，国家杰出青年科学基金获得者，中国地质调查局“李四光学者”，地质过程与矿产资源国家重点实验室主任，国际地质科学联合会主席，国际数学地球科学协会前主席（2012-2016）。2019年11月22日，当选中国科学院院士。主要从事定量地学研究，创立了地质过程奇异性理论、非线性矿产定量预测理论与方法体系。他发现成矿、地震、火山等复杂地道寒迎糠质事件质量和能量密度普遍具有分形分布规律，提出了"分形密度"新概念，建立了"密度套放充-尺度"分形模型，推导了度量复杂地质过程中物质超常聚集与能量巨量释放强度的"奇异性指数"，研发了复杂背景与叠加异常分离、弱信息提取和多源信息融记盛朵合等新技术，实现了奇异性事件结构、规律和过程的定量表征与模拟，以及覆盖区和深部矿产定量预测，开辟了地学大数据分析的新领域。 他提出并成功设立了国际地质科学联合会(IUGS)"国际大科学计划"平台，并成功推动 "深时数字地球"大科学计划成为IUGS首个大科学计划，牵头设立了联合国教科文组织"深时数字地球与矿产资源"教席。
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
        <p>1978年从河北地质学院地质勘探系毕业，2017年当选为中国工程院院士。 长期从事金属矿床成矿作用、成矿过程、成矿规律、矿产模型和找矿评价研究，对我国华南、三江、扬子、华北、北祁连、秦岭，天山以及大兴安岭等成矿区带进行过科学研究，提出了多项创新性成果。</p>
        <p>他研究提出我国中生代大规模成矿作用并不是呈连续性分布，而是集中出现在三个时间段，其中在华北和长江中下游地区为：230～210Ma, 150～137Ma, 132～115Ma, 在华南地区为：220～200Ma, 180～165,125～80Ma，并分析了三次 爆发式成矿的地球动力学背景。这一研究成果被国内外同行引用达1500余次以上，并受日本资源地质学会和韩国地质学会邀请赴日韩做大会报告，国际矿床成因协会邀请做主题报告；他以胶东地区金矿、东坪金矿、万古金矿和大水沟碲金矿为例，深入地探讨了在岩石圈伸展带中地幔流体参与成矿的基本特点和过程，提出了地幔流体成矿的模型和鉴别标志，深化了地幔流体成矿研究程度，并对找 矿提供了新思路。</p>
        <p>研究提出辉钼矿中铼含量可以用于示踪成矿物质来源，这一成果在国内外得到广泛应用。基于前人工作基础，通过进一步研究，深化了一批典型矿床模型，构筑出系列矿集区尺度的矿床模型，结合成矿动力学演化，提出了一些区带成矿动力学模型。这些不通尺度的矿床模型，不仅在理论上具有创新性，而且，对于进一步找矿勘查起到了重要的推动作用。</p>
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
        <p>
          谢玉洪，1961年2月生，教授级高级工程师。油气勘探和工程管理专家，享受国务院政府特殊津贴，李四光地质科学奖获得者。 1982年毕业于河北地质学院(现河北地质大学)，获工学学士学位；2005年6月毕业于中国地质大学（武汉），获理学博士学位。 国家能源深水油气工程技术研发中心理事，广东石油学会理事长，广东省企业联合会副会长，广东省科协学术委员会委员。现任中国海洋石油集团有限公司总地质师。2021年11月18日，当选为中国工程院院士。
        </p>
        <p>
          通过工程管理创新，不断优化作业方案，仅用224天钻探6口深水井，投入14亿元，高效探明深水自营区我国首个千亿方大气田--陵水17-2构造。测试准备时间由业界的45-60天减至11天，拆卸时间从15天缩为4天。创造了中国海上气井单层产能160万方/日的纪录。 研制海上勘探开发实时决策系统，广泛应用于中海油海上作业。其中VSP反演和地质导向应用技术，打破国际公司垄断，被斯仑贝谢公司评为亚太地区最贴近生产，功能最完善的勘探开发实时决策系统。 研发随钻监测技术，其研究成果应用于深水、高温高压和易垮塌地层实现海上复杂构造安全快速钻井，使北部湾探区钻井井下事故率从40-72%降至5%以下。 开展成藏机理及勘探配套技术研究，地震资料信噪比提高35%左右，拓宽有效频带约40%，地层压力预测精度90%以上，攻克了高温高压钻井事故多、成本高的世界性难题，钻井速度提高151%。指出烃类气比CO2优先出溶，5500m以浅高温高压条件下可以大规模游离成藏。发现了东方13、陵水25等多个大中型气田，突破油气勘探禁区，打开了资源量达5万亿方的天然气发展新领域。 南海西部近海有数十个边际油田未开发,储量达上亿吨，提出海上滚动勘探开发生产理念并组织攻关，建立海上复杂断块勘探开发技术系列，使油田开发门槛从2000万方降为200万方，勘探成功率从30%提高到66%。使濒临停产的涠西南油田年产量上升到300万方，累计新增原油储量3.26亿方。 为提高非均质性较强的东方1-1崖城13-1气田开发中后期剩余气分布预测精度，主持开展时移地震的采集、处理和解释研究，找出不同时期地震响应变化特征，并结合开发动态数值模拟，有效指导调整井位部署，提高经济效益。
        </p>
      </div>
      <md-button class="md-info btn" href="/characteristic">了解相关资源</md-button>
    </div>

    <div
      class="characteristicSection"
      :style="`background-image: url(${require('@/assets/img/characteristic/shen.png')})`"
      @click.stop="showInfo($event)"
    >
      <div class="portrait">申旭辉</div>
      <div class="text">
        <p> 1987年毕业于河北地质学院（现河北地质大学）水文地质与工程地质专业，获工学学士学位，国际宇航科学院通讯院士。主要研究领域是空间地球物理和遥感应用，长期承担国家973计划、863计划、科技支撑计划和国际交流合作计划及民用航天科研计划重点项目。现任应急管理部国家自然灾害防治研究院总工程师、中国“张衡一号”电磁卫星首席科学家兼工程副总设计师。 兼任中国地震学会理事、空间对地观测专业委员会主任、国家遥感技术标准化委员会委员、中国地震局科学技术委员会委员、中国航天战略研究院学术委员会委员、亚太空间合作组织专家委员会委员、国际空间科学研究所咨询委员会委员、中欧航天合作联委会电磁卫星联合工作组组长。</p>
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
  width: 5.71%;
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
