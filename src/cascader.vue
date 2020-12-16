<template>
  <div class="d-cascader" >
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <d-cascader-items :items="source" :height="popoverHeight" ></d-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items.vue';
export default {
  data(){ 
    return {
      popoverVisible: false
   }
  },
  components: {
    'd-cascader-items': CascaderItems
  },
  props: {
    source: Array,
    popoverHeight: {
      type: String
    }

  }

}

</script>
<style lang='scss' scoped>
@import './_var.scss';
.d-cascader{
  position: relative;
  .trigger{
    width: 200px;
    height: $height;
    border: 1px solid orange;
  }
  .popover{
    // height: 200px;
    border: 1px solid purple;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
  }
}
</style>