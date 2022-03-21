/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-21 16:44:03
 * @LastEditors: 郑钊宇
 * @Description: 项目配置
 */
module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== 'production'
      }
    }
  },
  devServer: {
    disableHostCheck: true
    // public: "http://192.168.80.243:8080"
  }
}
