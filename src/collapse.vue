<template>
    <div class="d-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'DarkCollapse',
    props: {
        selected: {
            type: Array
        },
        single: {
            type: Boolean,
            default: false
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
        if(this.single && this.selected.length > 1){
            console.warn('single属性下，selected最多有一个默认项')
            let selected = JSON.parse(JSON.stringify(this.selected))
            let length = selected.length
            selected.splice(1,length - 1)
            this.eventBus.$emit('update:selected', selected)
        }else{
            this.eventBus.$emit('update:selected', this.selected)
        }
        
        this.eventBus.$on('update:addSelected',(name)=>{
            //因为不能直接改变props的值，所以深拷贝一下
            let selected = JSON.parse(JSON.stringify(this.selected)) 
            if(this.single){
                selected = [name]
            }else{
                selected.push(name)
            }
            this.eventBus.$emit('update:selected', selected)
            //这句是改变此组件上selected的值，父组件上属性后面要加上.sync
            this.$emit('update:selected', selected)
        })
        this.eventBus.$on('update:removeSelected',(name)=>{
            let selected = JSON.parse(JSON.stringify(this.selected))
            let index = selected.indexOf(name)
            selected.splice(index,1)
            this.eventBus.$emit('update:selected', selected)
            this.$emit('update:selected', selected)
        })
        
    }
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.d-collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>