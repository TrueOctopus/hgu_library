/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:55:14
 * @LastEditTime: 2022-03-27 10:02:33
 * @LastEditors: 郑钊宇
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
