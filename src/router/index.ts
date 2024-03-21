import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsMenu from '../components/TabsMenu.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabsMenu,  
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: ()=>import('../views/Home.vue')
      },
      {
        path: 'library',
        component: ()=>import('../views/Library.vue')
      },
      {
        path: 'search',
        component: ()=>import('../views/Search.vue')
      },
      {
        path: 'radio',
        component: ()=>import('../views/Radio.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
