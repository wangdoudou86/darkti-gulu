<template>
  <transition name="slide">
    <div class="d-slides-item" :class="{ reverse }" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    },
  },
};
</script>
<style lang='scss' scoped>
// 离开的时候脱离文档流，那么下一个正好就可以占它的位置了
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all .5s linear;
}
.slide-enter {
  transform: translateX(100%);
  opacity: 0;
  &.reverse {
    transform: translateX(-100%);
  }
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  &.reverse {
    transform: translateX(100%);
  }
}
</style>