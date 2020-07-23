<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:38
 * @LastEditTime: 2020-07-23 07:59:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/right.vue
-->

<template>
  <div class="layer-right">
    right content
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Right extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="less">
.layer-right {
  flex: 1;
  background: #eee;
  padding: 16px;
}
</style>
