<!--
 * @Author: your name
 * @Date: 2020-07-23 08:46:46
 * @LastEditTime: 2020-07-23 10:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/index/another.vue
-->

<template>
  <section class="index">
    {{ str }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Another extends Vue {
  str = '我是another显示的内容';
}
</script>

<style lang="less">
.index {
  font-size: 18px;
  color: rgb(9, 68, 29);
}
</style>
