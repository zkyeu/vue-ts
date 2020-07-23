/*
 * @Author: zkyeu@163.com
 * @Date: 2020-06-19 16:45:12
 * @LastEditTime: 2020-07-22 11:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/main.ts
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from 'vue-svgicon';
import '@/assets/svg/web/';
Vue.use(SvgIcon, {
  tagName: 'svgicon'
});
import EUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(EUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
