<template>
    <div class="d-tabs" :class="positionClass">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'DarkTabs',
    props:{
        selected: {
            type: String,
            required: true
        },
        position:{
            type: String,
            default: 'top',
            validator(value){
                return ['top','bottom','left','right'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    computed: {
        positionClass(){
            let { position } = this
            return [position && `position-${position}`]
        }

    },
    mounted(){
        const that = this
        if(this.$children.length === 0){
            console && console.warn 
            && console.warn('tabs的子组件应为tabs-item和tabs-body，但你没有写子组件')
        }
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'DarkTabsHead'){
                vm.$children.forEach((item)=>{
                    if(item.$options.name === 'DarkTabsItem' && item.name === that.selected){
                        that.eventBus.$emit('changeitem',that.selected, item)
                    }
                })
            }
        })
        if(this.position === 'left' || this.position === 'right'){
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'DarkTabsHead'){
                    vm.position = that.position
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.d-tabs{
    display: flex;
    &.position-top{
        flex-direction: column;
    }
    &.position-bottom{
        flex-direction: column-reverse;
    }
    &.position-left{
        flex-direction: row;
    }
    &.position-right{
         flex-direction: row-reverse;
         justify-content: space-between;
    }
}
</style>