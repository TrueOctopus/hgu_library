<!--
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-21 11:07:09
 * @LastEditors: 郑钊宇
 * @Description: 底部栏组件
-->
<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://beian.miit.gov.cn/">
              冀ICP备15002650号
            </a>
          </li>
          <li>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank"
              style="height: 20px; color: white; text-decoration: none; display: inline-block; line-height: 20px"
            >
              <img
                border="0"
                hspace="0"
                alt=""
                src="@/assets/img/beian.png"
                width="20"
                height="20"
                style="float: left"
              >
              &nbsp;冀公网安备&nbsp;13010802000749号-2
            </a>
          </li>
          <br>
          <li>
            地址：河北省石家庄市槐安东路136号
          </li>
          <li>
            电话：0311-87208050（馆办）
          </li>
          <li>
            邮编：050031
          </li>
        </ul>
      </nav>
      <div class="copyright">
        版权所有：河北地质大学图书馆 CopyRight &copy; {{ year }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
  li {
    font-size: 14px;
    font-weight: 500;
    margin: 0px 3px;
    font-family: "Microsoft Yahei", sans-serif, serif;
  }
}
.copyright {
  font-family: "Microsoft YaHei", sans-serif, serif;
  letter-spacing: 0.03rem;
}
</style>
