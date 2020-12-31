<template>
  <div class="d-cascader-items" :style="{ height: height }">
    <div class="left" >
      {{level}}
      <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
        {{item.name}}
        <Icon name="right" class="icon-right" v-if="item.children"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <dark-cascader-items :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></dark-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon.vue';
export default {
  name: 'DarkCascaderItems',
  // data(){ 
  //   return {
  //     leftSelected: null
  //  }
  // },
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {   
      type: Array,
      detault(){
        return []
      }
    },
    level: { 
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems(){
      let currentSelected = this.selected[this.level]
      if(currentSelected && currentSelected.children){
        return currentSelected.children
      }else{
        return null
      }
    }
  },
  methods: {
    //点击某一项时，把这一项放进seleted数组中，并通知它的爸爸
    onClickLabel(item){
      console.log(item, 'itemmmmmm')
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
    }
  }

}

</script>
<style lang='scss' scoped>
@import './_var.scss';
.d-cascader-items{
  height: 200px;
  display: flex;
  align-items: flex-start;
  .left{
    height: 100%;
    padding: 10px 14px;
    .label{
      padding-bottom: 8px;
    }
    .label:last-child{
      padding-bottom: 0;
    }
    .icon-right{
      font-size: 12px;
      fill: #666;
      margin-left: .5em;
    }
  }
  .right{
    border-left: 1px solid $border-color-light;
  }
  
}
</style>