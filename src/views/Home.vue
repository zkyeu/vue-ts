<!--
 * @Author: your name
 * @Date: 2020-06-19 16:45:12
 * @LastEditTime: 2020-06-20 01:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Home.vue
-->
<template>
  <div>
    <Left />
    <Right />
  </div>
</template>

<script>
import Left from './layout/left';
import Right from './layout/right';

export default {
  name: "Home",
  components: {
    Left,
    Right
  }
};
</script>
