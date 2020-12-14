<template>
  <div class="d-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <!-- <div v-for="(item1,index1) in source" :key="index1">
        {{item1.name}}
        <hr>
        <div v-for="(item2,index2) in item1.children" :key="index2">
          {{item2.name}}
          <hr>
          <div v-for="(item3,index3) in item2.children" :key="index3">
            {{item3.name}}
          </div>
        </div>
      </div> -->
      <d-cascader-items :items="source"></d-cascader-items>
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
    source: Array
  }

}

</script>
<style lang='scss' scoped>
@import './_var.scss';
.d-cascader{
  .trigger{
    width: 200px;
    height: $height;
    border: 1px solid orange;
  }
  .popover{
    height: 200px;
    border: 1px solid purple;
  }
}
</style>