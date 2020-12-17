<template>
  <div class="d-cascader-items" :style="{ height: height }">
    <!-- {{sourceItem}} -->
    <div class="left" >
      <div class="label" v-for="(item,index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <Icon name="right" class="icon-right" v-if="item.children"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <dark-cascader-items :items="rightItems" :height="height"></dark-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon.vue';
export default {
  name: 'DarkCascaderItems',
  data(){ 
    return {
      leftSelected: null
   }
  },
  components: {
    Icon
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
      if(this.leftSelected && this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
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