<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-03 08:33:09
 * @LastEditTime: 2023-03-29 11:25:28
 * @LastEditors: 郑钊宇
 * @Description: 
-->
# 河北地质大学图书馆主页

## 总体说明

门户网站基于vue.js与Vue Material Kit组件库，而Vue Material Kit组件库则是基于Vue Material组件库，图标使用了Google Icons相关文档详见对应官网。

基于
[vue-material-kit](https://demos.creative-tim.com/vue-material-kit/documentation/)
[vue2](https://cn.vuejs.org/)
[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)

图标 [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)

## 开发环境

开发使用windows系统，使用Visual Studio Code作为开发工具，使用yarn作为包管理工具，采用vue cli脚手架构建项目，环境使用的具体包名及版本见package.json文件，下面列举基本开发环境中使用的版本。

Vue：2.6.14
Vue-Material：1.0.0-beta-11
Vue CLI：4.5.15
Npm：8.1.0
Yarn：1.22.18
Node.js：v16.12.0

## 项目结构介绍

（1）总体结构介绍
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── layout                 # 全局 layout
│   ├── plugins                 # 全局插件
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js                 # eslint 配置项
├── .gitignore                 # git忽略配置
├── .babelrc                   # babel-loader 配置
├── babel.config.js              # babel配置
├── vue.config.js                # vue-cli 配置
├── postcss.config.js            # postcss 配置
├── yarn-error.log              # yarn错误日志
├── yarn.lock                # yarn.lock（请不要直接编辑）
└── package.json               # package.json（请不要直接编辑）
（2）@/components说明
此处文件为公用组件，包括下拉框、提示框、分页等等组件，一般情况下请不要修改，会导致全局的样式变化。
（3）@/ layout/MainNavbar.vue说明
此文件为顶部导航条组件，撰写此文档时，由于整体屏幕适配问题对于移动端的导航条未完成，详见第三章中说明。
全局的滚动监听与媒体查询于此文件中定义，后续可基于此继续完善适配问题。
（4）@/views中的结构介绍
├── Characteristic                        # 特色资源
├── CommentHub                        # 反馈中心
├── components                         # 通用组件
├── DataBaseResouce                    # 资源中心
├── Home                             # 首页
├── Introduction                        # 图书馆介绍
├── Lecture                            # 活动讲座
├── News                              # 新闻中心
├── Personal                            # 个人信息相关
├── ReaderService                        # 读者服务
├── ReadingPromotion                     # 阅读推广
├── SearchResult                         # 全局搜索
├── Staff                               # 教职工读者证号查询
└── StudySupport                      # 学习支持
对其中的内容进行修改请参照注释及相关文档。
