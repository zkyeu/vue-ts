<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:19
 * @LastEditTime: 2020-11-05 14:46:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/left.vue
-->
<template>
  <div class="layer-left">
    <Menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Menu from '@/components/global/menu.vue';

@Component({
  components: {
    Menu
  }
})
export default class Left extends Vue {}
</script>

<style scoped lang="less">
.layer-left {
  width: 240px;
  height: calc(100vh - 66px);
  padding-top: 16px;
  border-right: #efefef 1px solid;
}
</style>
