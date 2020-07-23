<!--
 * @Author: your name
 * @Date: 2020-07-23 08:46:46
 * @LastEditTime: 2020-07-23 14:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/index/another.vue
-->

<template>
  <section class="other">
    {{ str }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Other extends Vue {
  str = '我是other显示的内容';
}
</script>

<style lang="less">
.other {
  font-size: 18px;
  color: blue;
}
</style>
