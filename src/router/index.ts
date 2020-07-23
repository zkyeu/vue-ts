/*
 * @Author: your name
 * @Date: 2020-06-19 16:45:12
 * @LastEditTime: 2020-07-23 14:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/router/index.ts
 */

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index', // 默认显示的页面
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/another',
        name: 'Another',
        component: () => import('../views/index/another.vue')
      },
      {
        path: '/other',
        name: 'Other',
        component: () => import('../views/index/other.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../components/global/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
