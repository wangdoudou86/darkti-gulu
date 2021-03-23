<template>
    <div class="pao_wrapper" ref="pao_wrapper">
        <table>
            <tr>
                <td id="pao_box1" ref="pao_box1">
                    <slot></slot>
                </td>
                <td id="pao_box2" ref="pao_box2"></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  props: {
      duration: {
          type: Number,
          default: 10
      },
      width: {
          type: Number,
          default: 1000
      }
  },
  mounted() {
    this.$nextTick(() => {
      let { pao_box1, pao_box2, pao_wrapper } = this.$refs;
      pao_box2.innerHTML = pao_box1.innerHTML;
      pao_wrapper.style.width = `${this.width}px`;
      this.timer = setInterval(this.marquee, this.duration);
    });
  },
  methods: {
    marquee() {
      let { pao_wrapper, pao_box1 } = this.$refs;
      // 一旦滑动到第二个盒子时，就让外层wrapper的scrollLeft为0，相当于又从第一个盒子处开始滑动，外层wrapper的scrollLeft慢慢加1，往复循环
      if ( pao_box1.offsetWidth && pao_wrapper.scrollLeft && pao_box1.offsetWidth - pao_wrapper.scrollLeft <= 0 ) {
        pao_wrapper.scrollLeft -= pao_box1.offsetWidth;
      } else {
        //  scrollLeft>0说明内容向左在移动 
        pao_wrapper.scrollLeft++;
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang='scss' scoped>
.pao_wrapper {
    height: 100%;
    overflow: hidden;
}
</style>