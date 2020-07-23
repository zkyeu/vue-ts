<!--
 * @Author: your name
 * @Date: 2020-06-20 01:07:19
 * @LastEditTime: 2020-07-23 07:55:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/layout/left.vue
-->
<template>
  <div class="layer-left">
    <Menu />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from '@/components/menu.vue';
// import Http from '@/api/api-axios';

@Component({
  components: {
    Menu
  }
})
export default class Left extends Vue {
  @Prop() private msg!: string;

  fetchData() {
    // Http.usereditoptions().then(res => {
    //   console.log(res);
    // });
  }

  mounted() {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layer-left {
  width: 240px;
  height: calc(100vh - 66px);
  padding-top: 16px;
  border-right: #efefef 1px solid;
}
</style>
