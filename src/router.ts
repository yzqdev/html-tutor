import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/HomeMain.vue'
import CssTwo from '@/views/cssLayout/Two.vue'
import CssLayout from '@/views/cssLayout/Main.vue'
import Flex from '@/views/cssLayout/Flex.vue'
let routes: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/home', redirect: '/home/main' },
  { path: '/', redirect: '/home/main' },

  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'main',
        name: 'homeMain',
        component: HomeMain,
      },
    ],
  },
  {
    path: '/css-two',
    name: 'CssTwo',
    component: CssTwo,
  },
  {
    path: '/css-layout',
    component: CssLayout,
    children: [
      {
        path: 'flex',
        name: 'Flex',
        component: Flex,
      },
      {
        path: 'flow',
        name: 'FlowLayout',
        component: () => import('@/views/cssLayout/FlowLayout.vue'),
      },
      {
        path: 'inline',
        name: 'Inline',
        component: () => import('@/views/cssLayout/Inline.vue'),
      },
      {
        path: 'relative',
        name: 'RelativeLayout',
        component: () => import('@/views/cssLayout/RelativeLayout.vue'),
      },
      {
        path: 'two',
        name: 'Two',
        component: () => import('@/views/cssLayout/Two.vue'),
      },
      {
        path: 'menu',
        name: 'MenuLayout',
        component: () => import('@/views/cssLayout/MenuLayout.vue'),
      },
      {
        path: 'pin',
        name: 'Pin',
        component: () => import('@/views/cssLayout/Pin.vue'),
      },
      {
        path: 'verticle',
        name: 'Vertivle',
        component: () => import('@/views/cssLayout/Verticle.vue'),
      },
      {
        path: 'awesome',
        name: 'Awesome',
        component: () => import('@/views/cssLayout/Awesome.vue'),
      },
      {
        path: 'temp',
        name: 'Temp',
        component: () => import('@/views/cssLayout/Temp.vue'),
      },
      {
        path: 'bfc',
        name: 'Bfc',
        component: () => import('@/views/css/Bfc.vue'),
      },
      {
        path: 'borderbox',
        name: 'BorderBox',
        component: () => import('@/views/css/borderbox.vue'),
      },
      {
        path: 'bubble',
        name: 'Bubble',
        component: () => import('@/views/css/bubble.vue'),
      },
      {
        path: 'gentable',
        name: 'Gentable',
        component: () => import('@/views/css/Gentable.vue'),
      },

      {
        path: 'layout',
        name: 'Layout',
        component: () => import('@/views/css/Layout.vue'),
      },
      {
        path: 'Triangle',
        name: 'Triangle',
        component: () => import('@/views/css/Triangle.vue'),
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
export default router
