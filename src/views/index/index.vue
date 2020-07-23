<!--
 * @Author: your name
 * @Date: 2020-07-23 08:41:45
 * @LastEditTime: 2020-07-23 08:44:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/index/index.vue
-->

<template>
  <section class="index">
    {{ str }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  str = '我是首页显示的内容';
}
</script>

<style lang="less">
.index {
  font-size: 18px;
  color: red;
}
</style>
