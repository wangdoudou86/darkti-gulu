<template>
    <div class="d-tabs-head" :class="positionClass" ref="head">
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
        this.eventBus.$on('update:selected',(name,vm)=>{
            this.$nextTick(()=>{
                this.setLinePosition(vm)
            })
        })
        this.$nextTick(()=>{
            if(this.position === 'left' || this.position === 'right'){
                this.$children.forEach((vm)=>{
                    vm.position = this.position
                })
            }
        })
    },
    computed:{
        positionClass(){
            let { position } = this
            return [position && `head-${position}`]
        }
    },
    methods: {
        setLinePosition(selectedVm){
            let {width, height, top, left} = selectedVm.$el.getBoundingClientRect()
            let {left: left2, top: top2} = this.$refs.head.getBoundingClientRect()
            if(this.position === 'left' || this.position === 'right'){
                this.$refs.line.style.height = `${height}px`
                this.$refs.line.style.top = `${top - top2}px`
            }else{
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            }
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