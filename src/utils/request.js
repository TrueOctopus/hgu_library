/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:15:30
 * @LastEditTime: 2022-03-27 09:54:53
 * @LastEditors: 郑钊宇
 * @Description:
 */
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// base api
const VUE_APP_BASE_API = 'http://localhost:8081'

// create an axios instance
const service = axios.create({
  baseURL: VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
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

  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
