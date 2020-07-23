<!--
 * @Author: your name
 * @Date: 2020-06-19 16:45:12
 * @LastEditTime: 2020-07-21 16:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Home.vue
-->
<template>
  <section class="main-layer">
    <Header />
    <div class="main-content">
      <Left />
      <Right />
    </div>
  </section>
</template>

<script>
import Header from './layout/head.vue';
import Left from './layout/left.vue';
import Right from './layout/right.vue';
export default {
  name: 'Home',
  components: {
    Header,
    Left,
    Right
  }
};
</script>

<style lang="less">
.main-layer {
  // background: rgba(243, 244, 247, 1);

  .main-content {
    display: flex;
    // justify-content: space-between;
  }
}
</style>
