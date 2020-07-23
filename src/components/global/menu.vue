<!--
 * @Author: your name
 * @Date: 2020-07-21 19:46:52
 * @LastEditTime: 2020-07-23 14:30:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/components/menu.vue
-->

<template>
  <nav class="menu">
    <el-menu router unique-opened :default-active="$route.path">
      <template v-for="item in menuList">
        <el-submenu v-if="item.children" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.lable }}</span>
          </template>
          <el-menu-item
            v-for="sub in item.children"
            :index="sub.path"
            :key="sub.path"
            >{{ sub.lable }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item v-else :key="item.path" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.lable }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Http from '@/api/api-axios';
@Component
export default class HelloWorld extends Vue {
  menuList = [];

  fetchMenu() {
    Http.userinfo().then(res => {
      this.menuList = res.data.menu;
    });
  }
  created() {
    this.fetchMenu();
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
    }

    .el-menu-item,
    .el-submenu__title {
      height: 50px;
      line-height: 50px;
      &:focus {
        background-color: #ecf5ff;
      }
    }
  }
}
</style>
