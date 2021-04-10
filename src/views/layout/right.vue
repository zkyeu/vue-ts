<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:38
 * @LastEditTime: 2020-11-05 15:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/right.vue
-->

<template>
  <div class="layer-right">
    <!-- <router-view /> -->
    <keep-alive :include="currentInclude">
      <router-view />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Right extends Vue {
  get currentInclude() {
    return this.$store.state.lastOneRoute;
  }
}
</script>

<style scoped lang="less">
.layer-right {
  flex: 1;
  background: #eee;
  padding: 16px;
}
</style>
