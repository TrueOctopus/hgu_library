/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:15:30
 * @LastEditTime: 2022-06-09 10:39:09
 * @LastEditors: 郑钊宇
 * @Description: 请求配置
 */
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url 接口基础地址
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // 超时时间
})

// request 监听器配置
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    return config
  },

  error => {
    // do something with request error
    store.dispatch('notification/promptNotification', {
      message: error.msg || '发生错误！',
      noticeType: 'danger'
    })
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 监听器配置
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */
  response => {
    const res = response.data
    if (!res.ok) {
      store.dispatch('notification/promptNotification', {
        noticeType: 'danger',
        message: res.msg || 'Error'
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    store.dispatch('notification/promptNotification', {
      noticeType: 'danger',
      message: error.msg
    })
    return Promise.reject(error)
  }
)

export default service
