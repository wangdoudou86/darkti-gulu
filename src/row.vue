<template>
   <div class="row" :style="rowStyle">
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
    },
    computed:{
        rowStyle(){
            let { gutter } = this
            return { marginLeft: -gutter + 'px', marginRight: -gutter + 'px' }
        }
    }
}
</script>
<style lang="scss">
.row{
    display: flex;
}
</style>