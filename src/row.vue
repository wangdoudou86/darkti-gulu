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
        justify: {
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
            let { justify } = this
            return [justify && `justify-${justify}`]
        }

    }
}
</script>
<style lang="scss">
.row{
    display: flex;
    &.justify-left{
        justify-content: flex-start;
    }
    &.justify-center{
        justify-content: center;
    }
    &.justify-right{
        justify-content: flex-end;
    }
}
</style>