<template>
    <div class="d-tabs-head" :class="positionClass">
        <slot></slot>
        <div class="line" ref="line"></div> 
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DarkTabsHead',
    inject: ['eventBus'],
    data(){
        return {
            position: ''
        }
    },
    mounted(){
        const that = this
        this.eventBus.$on('update:selected',(name,vm)=>{
            that.$nextTick(()=>{
                let {width, height, top, right, left, bottom} = vm.$el.getBoundingClientRect()
                if(that.position === 'left' || that.position === 'right'){
                    that.$refs.line.style.height = `${height}px`
                    that.$refs.line.style.top = `${top}px`
                }else{
                    that.$refs.line.style.width = `${width}px`
                    that.$refs.line.style.left = `${left}px`
                }
            })
        })
        this.$nextTick(()=>{
            if(this.position === 'left' || this.position === 'right'){
                this.$children.forEach((vm)=>{
                    vm.position = that.position
                })
            }
        })
    },
    computed:{
        positionClass(){
            let { position } = this
            return [position && `head-${position}`]
        }
    }
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
$line-color: #409eff;
.d-tabs-head{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    height: $tabs-height;
    position: relative;
    > .line{
        height: 1px;
        border-bottom: 2px solid $line-color;
        position: absolute;
        bottom: -1px;
        transition: all 200ms linear;
    }
    > .actions-wrapper{ margin-left: auto; }
    &.head-left{
        height: 100vh;
        flex-direction: column;
        border-right: 1px solid #ddd;
        border-bottom: 0;
        > .line{
            border-bottom: 0;
            border-right: 2px solid $line-color;
            position: absolute;
            right: -1px;
            transition: all 200ms linear;
        }
        > .actions-wrapper{ margin: auto; padding: 1em; }
    }
    &.head-right{
        height: 100vh;
        flex-direction: column;
        border-left: 1px solid #ddd;
        border-bottom: 0;
        > .line{
            border-bottom: 0;
            border-left: 2px solid $line-color;
            position: absolute;
            left: -1px;
            transition: all 200ms linear;
        }
        > .actions-wrapper{ margin: auto; padding: 1em; }
    }
}
</style>