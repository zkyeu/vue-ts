<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:19
 * @LastEditTime: 2020-07-23 14:23:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/left.vue
-->
<template>
  <div class="header">
    <div class="logo">
      <a href="/"><img src="../../assets/imgs/logo.png"/></a>
      <!-- LOGO -->
    </div>
    <div class="user-Center">
      <!-- <svgicon name="bell" /> -->
      <svgicon name="user" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Http from '@/api/api-axios';

@Component
export default class Head extends Vue {
  @Prop() private msg!: string;

  fetchData() {
    Http.userinfo().then(res => {
      console.log(res);
    });
  }

  mounted() {
    // this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 24px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  .logo {
    padding-top: 11px;
    font-size: 30px;
    font-weight: 500;
    img {
      width: auto;
      height: 28px;
    }
  }

  .user-Center {
    display: flex;
    height: 50px;
    align-items: center;
    svg {
      width: 30px;
      height: 30px;
      color: #ddd;
    }
  }
}
</style>
