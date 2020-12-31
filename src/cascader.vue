<template>
  <div class="d-cascader" >
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result  }}
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <d-cascader-items :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></d-cascader-items>
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
    },
    selected: {   //  父组件要知道每一级选的是哪一项，它才好把它们渲染出来
      type: Array,
      detault(){
        return []
      }
    }

  },
  computed: {
    result(){
      return this.selected.map( item => item.name ).join('/')
    }
  },
  methods: {
    // 监听到cascader-item的update:selected事件，并再次触发update:selected并把选择的项传给他的爸爸
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
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
    line-height: $height;
    border: 1px solid $border-color;
    padding: 0 10px;
  }
  .popoverWrapper{
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    margin-top: 2px;
    @extend %box-shadow;
  }
}
</style>