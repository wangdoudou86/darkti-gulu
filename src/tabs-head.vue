<template>
    <div class="d-tabs-head">
        <slot></slot>
        <div class="line"></div> 
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DarkTabsHead',
    inject: ['eventBus'],
    mounted(){
        const that = this
        this.eventBus.$on('update:selected',(name,vm)=>{
            let {width, left} = vm.$el.getBoundingClientRect()
            //这里也可以给line加个ref，用ref去查找
            //that.refs.line.style.width
            that.$el.querySelector('.line').style.width = `${width}px`
            that.$el.querySelector('.line').style.left = `${left}px`
        })
    }
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.d-tabs-head{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    height: $tabs-height;
    position: relative;
    > .line{
        height: 1px;
        border-bottom: 2px solid blue;
        position: absolute;
        bottom: -1px;
        transition: all 200ms linear;
    }
    > .actions-wrapper{ margin-left: auto; }
}
</style>