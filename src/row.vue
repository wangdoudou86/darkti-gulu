<template>
   <div class="row" :style="{marginLeft: -gutter + 'px',marginRight: -gutter + 'px'}">
       <slot></slot>
   </div>
</template>
<script>
export default {
    name: 'GuluRow',
    props:{
        gutter:{
            type: [Number, String]
        }
    },
    mounted(){
        const that = this
        that.$children.forEach((children)=>{
            children.gutter = that.gutter
        })
    }
}
</script>
<style lang="scss">
.row{
    display: flex;
}
</style>