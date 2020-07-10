<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:19
 * @LastEditTime: 2020-07-09 21:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/left.vue
-->
<template>
  <div class="layer-main">
    head
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Http from '@/api/api-axios';

@Component
export default class Main extends Vue {
  @Prop() private msg!: string;

  fetchData() {
    Http.usereditoptions().then(res => {
      console.log(res);
    });
  }

  mounted() {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layer-main {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
