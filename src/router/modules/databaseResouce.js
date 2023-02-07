/**
 * @Author: 郑钊宇
 * @Date: 2022-03-25 08:43:23
 * @LastEditTime: 2023-02-07 20:58:02
 * @LastEditors: 郑钊宇
 * @Description: 数据库资源路由表
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/DataBaseResouce/Index'
import Collection from '@/views/DataBaseResouce/Collection.vue'
import AllResouce from '@/views/DataBaseResouce/navigation/All.vue'
import CNResouce from '@/views/DataBaseResouce/navigation/CN.vue'
import ForeignResouce from '@/views/DataBaseResouce/navigation/Foreign.vue'
import OpenResouce from '@/views/DataBaseResouce/navigation/Open.vue'
import TryResouce from '@/views/DataBaseResouce/navigation/Try.vue'
import Characteristic from '@/views/DataBaseResouce/Characteristic.vue'
import Delivery from '@/views/DataBaseResouce/Delivery.vue'

const databaseResouce = {
  path: '/resouce',
  name: 'Resouce',
  redirect: '/resouce/collection',
  components: {
    default: Index,
    header: MainNavbar,
    footer: MainFooter
  },
  props: {
    header: { colorOnScroll: 100 },
    footer: { backgroundColor: 'black' }
  },
  children: [
    {
      path: 'collection',
      name: 'Collection',
      components: {
        default: Collection,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'all',
      name: 'AllResouce',
      components: {
        default: AllResouce,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'cn',
      name: 'CNResouce',
      components: {
        default: CNResouce,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'foreign',
      name: 'ForeignResouce',
      components: {
        default: ForeignResouce,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'open',
      name: 'OpenResouce',
      components: {
        default: OpenResouce,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'try',
      name: 'TryResouce',
      components: {
        default: TryResouce,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'characteristic',
      name: 'Characteristic',
      components: {
        default: Characteristic,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'delivery',
      name: 'Delivery',
      components: {
        default: Delivery,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}
export default databaseResouce
