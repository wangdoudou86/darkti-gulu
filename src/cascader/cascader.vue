<template>
  <div class="d-cascader" v-click-outside="close">
    <div class="trigger" @click="toggle" >
      {{ result  }}
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <d-cascader-items 
        :items="source" 
        :height="popoverHeight" 
        :load-data="loadData" 
        :loading-item="loadingItem" 
        :selected="selected" 
        @update:selected="onUpdateSelected"></d-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items.vue';
import ClickOutside from './click-outsite';
export default {
  data(){ 
    return {
      popoverVisible: false, 
      loadingItem: {}
   }
  },
  directives: { ClickOutside },
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
    },
    loadData: {
      type: Function
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
      let lastItem = newSelected[newSelected.length-1]
      // 在source中找出刚刚点击的这一项对象
      // 简单查找，就是第一层，直接找id，不去children里找id
      let simplest = (children, id)=>{
        return children.filter(item => item.id === id)[0]
      }
      //需要去children里找id
      let complex = (children, id)=>{
        let noChildren = []
        let hasChildren = []
        //有children和没有children的分开来找
        children.forEach((item) => {
          if(item.children){
            hasChildren.push(item)
          }else{
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if(found){
          return found
        }else{
          //对有children的还是先进行一次简单查找
          found = simplest(hasChildren, id)
          if(found){
            return found
          }else{
            //不能用forEach，因为forEach不能跳出整个循环
            for(let i = 0; i < hasChildren.length; i++){
              found = complex(hasChildren[i].children, id)
              if(found){
                return found
              }
            }
            return undefined
          }
        }
      }

      let updateSource = (res)=>{
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate =  complex(copy, lastItem.id)
        // this.$set(toUpdate, 'children', res)
        // 不是vue上的属性，就可以不用set
        toUpdate.children = res
        this.$emit('update:source', copy)
      }
      if(!lastItem.isLeaf && this.loadData){
        //当updateSource这个函数被调用了，说明已经加载完成了，这时菊花可以消失了
        this.loadData(lastItem, updateSource)
        this.loadingItem = lastItem
      }
    },
    open(){
      this.popoverVisible = true
    },
    close(){
      this.popoverVisible = false
    },
    toggle(){
      if(this.popoverVisible){
        this.close()
      }else{
        this.open()
      }
    },
  }

}

</script>
<style lang='scss' scoped>
@import '../_var.scss';
.d-cascader{
  position: relative;
  display: inline-block;
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
    z-index: 1;
    @extend %box-shadow;
  }
}
</style>