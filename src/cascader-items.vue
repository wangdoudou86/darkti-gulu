<template>
  <div class="d-cascader-items" :style="{ height: height }">
    <!-- {{sourceItem}} -->
    <div class="left" >
      <div class="label" v-for="(item,index) in items" :key="index" @click="selectedItem = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <dark-cascader-items :items="rightItems" :height="height"></dark-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DarkCascaderItems',
  data(){ 
    return {
      selectedItem: null
   }
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  computed: {
    rightItems(){
      if(this.selectedItem && this.selectedItem.children){
        return this.selectedItem.children
      }else{
        return null
      }
    }
  }

}

</script>
<style lang='scss' scoped>
.d-cascader-items{
  height: 200px;
  display: flex;
  align-items: flex-start;
  .left{
    height: 100%;
    border: 1px solid red;
  }
  .right{
    margin-top: -1px; //让右边都往上1像素，因为有个边框
  }
}
</style>