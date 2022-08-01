import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/HomeMain.vue'
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
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
export default router
