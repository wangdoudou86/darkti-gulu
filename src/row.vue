<template>
   <div class="row" :style="rowStyle" :class="rowClass">
       <slot></slot>
   </div>
</template>
<script>
export default {
    name: 'GuluRow',
    props:{
        gutter:{
            type: [Number, String]
        },
        align: {
            type: String,
            validator(value){
                return ['left', 'center', 'right'].includes(value)   //这个值必须是这三个中的一个
            }
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
        },
        rowClass(){
            let { align } = this
            return [align && `align-${align}`]
        }

    }
}
</script>
<style lang="scss">
.row{
    display: flex;
    &.align-left{
        justify-content: flex-start;
    }
    &.align-center{
        justify-content: center;
    }
    &.align-right{
        justify-content: flex-end;
    }
}
</style>