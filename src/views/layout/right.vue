<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:38
 * @LastEditTime: 2020-06-20 01:39:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/right.vue
-->
<template>
  <div class="hello">
    right
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Right extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aa {
  display: inline;
}
</style>
