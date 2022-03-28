/**
 * @Author: 郑钊宇
 * @Date: 2022-03-16 08:44:06
 * @LastEditTime: 2022-03-27 09:58:40
 * @LastEditors: 郑钊宇
 * @Description:
 */
const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username
}
export default getters
