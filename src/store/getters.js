/**
 * @Author: 郑钊宇
 * @Date: 2022-03-16 08:44:06
 * @LastEditTime: 2022-03-29 15:21:12
 * @LastEditors: 郑钊宇
 * @Description:
 */
const getters = {
  token: state => state.user.token,
  username: state => state.user.username,
  isShowNotification: state => state.notification.isShowNotification,
  message: state => state.notification.message,
  notificationType: state => state.notification.notificationType,
  duration: state => state.notification.duration
}
export default getters
