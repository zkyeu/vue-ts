<!--
 * @Author: your name
 * @Date: 2020-07-21 19:46:52
 * @LastEditTime: 2020-07-23 07:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/components/menu.vue
-->

<template>
  <nav class="menu">
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.id.toString()"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.lable }}</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  menuList = [
    {
      id: 1,
      lable: '导航菜单一',
      icon: 'el-icon-location',
      path: ''
    },
    {
      id: 2,
      lable: '导航菜单2',
      icon: 'el-icon-menu',
      path: ''
    },
    {
      id: 3,
      lable: '导航菜单3',
      icon: 'el-icon-document',
      path: ''
    },
    {
      id: 4,
      lable: '导航菜单4',
      icon: 'el-icon-setting',
      path: ''
    },
    {
      id: 5,
      lable: '导航菜单5',
      icon: 'el-icon-s-promotion',
      path: ''
    },
    {
      id: 6,
      lable: '导航菜单6',
      icon: 'el-icon-date',
      path: ''
    },
    {
      id: 7,
      lable: '导航菜单7',
      icon: 'el-icon-takeaway-box',
      path: ''
    }
  ];
  @Prop() private msg!: string;

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
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
