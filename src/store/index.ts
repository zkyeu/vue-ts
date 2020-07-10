/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 23:42:07
 * @LastEditTime: 2020-07-10 23:14:02
 * @LastEditors: Please set LastEditors
 */

import Vue from 'vue';
import Vuex from 'vuex';

import * as mutations from './mutations';
import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations
});
export default store;
