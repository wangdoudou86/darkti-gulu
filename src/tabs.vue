<template>
    <div class="d-tabs" >
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
        direction:{
            type: String,
            default: 'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
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
    mounted(){
        const that = this
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'DarkTabsHead'){
                vm.$children.forEach((item)=>{
                    if(item.$options.name === 'DarkTabsItem' && item.name === that.selected){
                        that.eventBus.$emit('update:selected',that.selected, item)
                    }
                })
            }
        })
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>