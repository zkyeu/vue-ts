<!--
 * @Author: your name
 * @Date: 2020-07-21 19:46:52
 * @LastEditTime: 2020-07-23 10:57:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/components/menu.vue
-->

<template>
  <nav class="menu">
    <el-menu router :default-active="$route.path">
      <el-menu-item
        v-for="item in menuList"
        :key="item.path"
        :index="item.path"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.lable }}</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  menuList = [
    {
      id: 1,
      lable: '默认页面',
      icon: 'el-icon-location',
      path: '/index'
    },
    {
      id: 2,
      lable: '其他页面',
      icon: 'el-icon-menu',
      path: '/other'
    },
    {
      id: 3,
      lable: '另外一个页',
      icon: 'el-icon-document',
      path: '/another'
    },
    {
      id: 4,
      lable: '导航菜单4',
      icon: 'el-icon-setting',
      path: '/a'
    },
    {
      id: 5,
      lable: '导航菜单5',
      icon: 'el-icon-s-promotion',
      path: '/b'
    },
    {
      id: 6,
      lable: '导航菜单6',
      icon: 'el-icon-date',
      path: '/c'
    },
    {
      id: 7,
      lable: '导航菜单7',
      icon: 'el-icon-takeaway-box',
      path: '/d'
    }
  ];
}
</script>

<style scoped lang="less">
.menu {
  /deep/ .el-menu {
    border: none;

    li {
      display: block;
      margin: 3px 16px;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
