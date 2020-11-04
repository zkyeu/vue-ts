<!--
 * @Author: your name
 * @Date: 2020-07-21 19:46:52
 * @LastEditTime: 2020-11-04 10:01:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/components/menu.vue
-->

<template>
  <nav class="menu">
    <el-menu
      router
      unique-opened
      :default-active="$route.path.replace('/', '')"
    >
      <!-- <el-menu unique-opened :default-active="$route.path.replace('/', '')"> -->
      <template v-for="item in menuList">
        <el-submenu
          v-if="item.children && item.children.length > 0"
          :key="item.id"
          :index="item.path"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="sub in item.children"
            :key="sub.id"
            :index="item.path"
            >{{ sub.label }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Http from '@/http/api-axios';
import HD from './handleData';
@Component
export default class Menu extends Vue {
  menuList = [] as unknown;

  fetchMenu() {
    Http.userinfo().then(() => {
      // this.menuList = res.data.menulist;
      this.menuList = HD.MenuData();
    });
  }
  created() {
    this.fetchMenu();
  }
}
</script>

<style scoped lang="less">
.menu {
  display: flex;
  width: 200px;
  overflow: hidden;
  /deep/ .el-menu {
    border: none;

    li {
      display: block;
      margin: 3px 16px;
    }

    .el-menu-item,
    .el-submenu__title {
      height: 48px;
      line-height: 48px;
      &:focus {
        background-color: #ecf5ff;
      }
    }
  }
}
</style>
