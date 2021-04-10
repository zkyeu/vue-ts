<!--
 * @Author: your name
 * @Date: 2020-07-23 08:41:45
 * @LastEditTime: 2021-04-01 11:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/index/index.vue
-->

<template>
  <section class="index">
    <!-- <div v-html="latex"></div> -->
    <!-- {{ str }} -->
    <!-- <div>{{ imgstr.question }}</div>
    <div>{{ imgstr.answer }}</div> -->
    <div v-html="content"></div>
  </section>
</template>

<script lang="ts">
import Http from '@/http/api-axios';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  content =
    '<p>（1）直径：$5\\times 2=10($分米）</p><p>表面积：$3.14\\times 10\\times 4+3.14\\times 5^{2}\\times 2$</p><p>$=125.6+157$</p><p>$=282.6($平方分米）</p><p>体积：$3.14\\times 5^{2}\\times 4=314($立方分米）</p><p>（2）半径：$2\\div 2=1($米）</p><p>表面积：$3.14\\times 2\\times 0.7+3.14\\times 1^{2}\\times 2$</p><p>$=4.396+6.28$</p><p>$=10.676($平方米）</p><p>体积：$3.14\\times 1^{2}\\times 0.7=2.198($立方米）；</p><p>（3）直径：$20\\times 2=40($厘米）</p><p>表面积：$3.14\\times 40\\times 5+3.14\\times 20^{2}\\times 2$</p><p>$=628+2512$</p><p>$=3140($平方厘米）</p><p>体积：$3.14\\times 20^{2}\\times 5=6280($立方厘米）</p><p>（4）半径$4\\div 2=2($分米）</p><p>体积：$\\dfrac{1}{3}\\times 3.14\\times 2^{2}\\times 2.4$</p><p>$=3.14\\times 4\\times 0.8$</p><p>$=10.048($立方分米）</p><p>（5）直径：$0.5\\times 2=1($米）</p><p>体积：$\\dfrac{1}{3}\\times 3.14\\times 0.5^{2}\\times 4.5$</p><p>$=3.14\\times 0.25\\times 1.5$</p><p>$=1.1775($立方米）</p><p>填表如下：</p><p><table ><tbody ><tr ><td rowspan="" colspan="">名称</td><td rowspan="" colspan="">半径</td><td rowspan="" colspan="">直径</td><td rowspan="" colspan="">高</td><td rowspan="" colspan="">表面积</td><td rowspan="" colspan="">体积</td></tr><tr ><td rowspan="3" colspan="">圆柱</td><td rowspan="" colspan="">$ 5dm$</td><td rowspan="" colspan="">$ 10dm$</td><td rowspan="" colspan="">$ 4dm$</td><td rowspan="" colspan="">$282.6dm^{2}  $</td><td rowspan="" colspan="">$314dm^{3} $</td></tr><tr ><td rowspan="" colspan="">$ 1m$</td><td rowspan="" colspan="">$ 2m$</td><td rowspan="" colspan="">$ 0.7m$</td><td rowspan="" colspan="">$ 10.676m^{2} $</td><td rowspan="" colspan="">$2.198m^{3} $</td></tr><tr ><td rowspan="" colspan="">$ 20cm$</td><td rowspan="" colspan="">$ 40cm$</td><td rowspan="" colspan="">$ 5cm$</td><td rowspan="" colspan="">$ 3140cm^{2}$</td><td rowspan="" colspan="">$6280cm^{3} $</td></tr><tr ><td rowspan="2" colspan="">圆锥</td><td rowspan="" colspan="">$ 2dm$</td><td rowspan="" colspan="">$ 4dm$</td><td rowspan="" colspan="">$ 2.4dm$</td><td rowspan="" colspan="">$_ $</td><td rowspan="" colspan="">$10.048dm^{3} $</td></tr><tr ><td rowspan="" colspan="">$ 0.5m$</td><td rowspan="" colspan="">$ 1m$</td><td rowspan="" colspan="">$4.5m$</td><td rowspan="" colspan="">$-$</td><td rowspan="" colspan="">$1.1775m^{3} $</td></tr></tbody></table></p>';
  latex =
    '<p>$\\because $∫$xf\\left(x\\right)dx=\\arcsin x+C$</p><p>$\\therefore $上式两端对$x$求导得：</p><p>$xf\\left(x\\right)=\\dfrac{1}{\\sqrt{1-x^{2}}}$</p><p>$\\therefore f\\left(x\\right)=\\dfrac{1}{x\\sqrt{1-x^{2}}}$</p><p>$\\therefore $∫$\\dfrac{1}{f\\left(x\\right)}dx=$∫$x\\sqrt{\\left(}1-x^{2}\\right)dx=-\\dfrac{1}{2}$∫$\\sqrt{\\left(}1-x^{2}\\right)d\\sqrt{1-x^{2}}=-\\dfrac{1}{3}\\left(1-x^{2}\\right)^{\\frac{3}{2}}+C$</p>';
  str =
    '11111asdfasd$1+1=2$fasdfas阿斯顿发所$\\begin{array}{c}\\{a}_{n}=(-3)^{n}{b}_{n}\\end{array}\\right$发生的发生地方 $123$';
  // imgstr = {};
  // datas = {
  //   source: 18,
  //   question:
  //     '#求答案#求助！麻烦学霸们帮忙看下这道题的答案是什么？我会主动采纳优质答案，谢谢！<img src="zyb_6b48cca8ff4db0bd3411cb361a9a4143" width="1080" height="1440"/>',
  //   answer:
  //     '<p>平行四边形的底扩大为原来的<img class="kfformula" src="http://img.zuoyebang.cc/zyb_b64543a98226cffc2c3a44bdb9014a90f603eaa9.jpg" data-latex="6"/>倍，高缩小为原来的，它的面积扩大为原来的<img class="kfformula" src="http://img.zuoyebang.cc/zyb_10dfa9ec8a136327377e2172918fa0ec09fac7e4.jpg" data-latex="6\times dfrac {1} {3}=2" width="62" height="40" style="width: 62px; height: 40px;"/>倍.</p>'
  // };
  transletLatex() {
    this.$nextTick(() => {
      // 检测错误
      (window as any).MathJax.Hub.Register.MessageHook(
        'TeX Jax - parse error',
        function(message: any) {
          console.log(message);
        }
      );
      // 获取所有latex
      // (window as any).MathJax.Hub.getAllJax([this.$el]);

      // 执行渲染
      (window as any).MathJax.Hub.Queue(
        ['Typeset', (window as any).MathJax.Hub, this.$el],
        this.countTranslate()
      );
    });
  }
  getAllLatex() {
    // 放在nexttick内获取不到
    setTimeout(() => {
      const dom = document.getElementsByTagName('body');
      console.log('allLatex', (window as any).MathJax.Hub.getAllJax(dom));
    }, 1000);
  }
  countTranslate() {
    console.log(1);
  }

  mounted() {
    this.transletLatex();
    this.getAllLatex();
  }
}
</script>

<style lang="less">
.index {
  font-size: 18px;
  color: #000;
}
</style>
