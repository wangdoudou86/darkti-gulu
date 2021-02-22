<template>
  <div class="d-cascader-items" :style="{ height: height }">
    <div class="left" >
      <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span v-if="item.name === loadingItem.name">
          <Icon name="loading" class="icon-loading" ></Icon>
        </span>
        <span v-else>
          <Icon name="right" class="icon-right" v-if="rightArrowVisible(item)"></Icon>
        </span>

      </div>
    </div>
    <div class="right" v-if="rightItems && rightItems.length > 0">
      <dark-cascader-items 
        :items="rightItems" 
        :height="height" 
        :level="level+1" 
        :load-data="loadData" 
        :loading-item="loadingItem" 
        :selected="selected" 
        @update:selected="onUpdateSelected"></dark-cascader-items>
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
    },
     loadData: {
      type: Function
    },
    loadingItem: {
      type: Object
    }
  },
  computed: {
    rightItems(){
      if(this.selected[this.level]){
        let currentSelected = this.items.filter(item => item.name === this.selected[this.level].name)
        //记住currentSelected是个数组！！！！！
        if(currentSelected && currentSelected[0].children && currentSelected[0].children.length>0){
          return currentSelected[0].children
        }
      }
      // 因为computed依赖selected和level
      // 传回的selected[0]里没有children属性，所以不会有rightItems
      // 因为children是直接往source里放，去更新source的，点击的item放进selected里时，它是还没有children属性的
      // let currentSelected = this.selected[this.level]
      // if(currentSelected && currentSelected.children){
      //   return currentSelected.children
      // }else{
      //   return null
      // }
    },
    
  },
  methods: {
    //点击某一项时，把这一项放进seleted数组中，并通知它的爸爸
    onClickLabel(item){
      this.isSelected = item.name
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level+1)   //每次点击item后，就把selected中this.level后面的项给删去
      this.$emit('update:selected', copy)
    },
    //递归的组件上也需要监听update:selected事件，且再触发update:selected事件并把传来的selected再传出去
    //就像是一级一级传递消息，第一级传给第二级，第二级收到消息后，告诉第一级它收到了，并把消息再传给第一级
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
    },
    rightArrowVisible(item){
      return this.loadData ? !item.isLeaf : item.children
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
    overflow: auto;
    .label{
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
      &.isSelected{
        color: orange;
      }
      &:hover{
        background-color: #eee;
      }
      .icon-loading,
      .icon-right{
        font-size: 12px;
        fill: #666;
        margin-left: 1em;
      }
      .icon-loading{
        animation: spin 1s linear infinite;
      }
    }
    
  }
  .right{
    border-left: 1px solid $border-color-light;
  }
  
}
</style>