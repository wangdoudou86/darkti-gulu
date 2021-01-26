<template>
  <div class="d-cascader-items" :style="{ height: height }">
    <div class="left" >
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
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level+1)   //每次点击item后，就把selected中this.level后面的项给删去
      this.$emit('update:selected', copy)
    },
    //递归的组件上也需要监听update:selected事件，且再触发update:selected事件并把传来的selected再传出去
    //就像是一级一级传递消息，第一级传给第二级，第二级收到消息后，告诉第一级它收到了，并把消息再传给第一级
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
    overflow: auto;
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