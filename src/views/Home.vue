<!--
 * @Author: your name
 * @Date: 2020-06-19 16:45:12
 * @LastEditTime: 2020-07-10 11:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Home.vue
-->
<template>
  <section class="main-layer">
    <Main />
  </section>
</template>

<script>
import Main from './layout/main';

export default {
  name: 'Home',
  components: {
    Main
  }
};
</script>

<style lang="less">
.main-layer {
  background: rgba(243, 244, 247, 1);
}
</style>
