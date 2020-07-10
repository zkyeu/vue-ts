<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:19
 * @LastEditTime: 2020-07-09 21:16:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/left.vue
-->
<template>
  <div class="layer-head">
    head
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Http from '@/api/api-axios';

@Component
export default class Head extends Vue {
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
.layer-head {
  display: flex;
  height: 56px;
  background: #ff0;
}
</style>
