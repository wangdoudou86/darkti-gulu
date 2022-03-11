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
        let { single } = this
        // 不要直接去改变props的值，深拷贝复制一份新的
        let selected = JSON.parse(JSON.stringify(this.selected))
        if(single && selected.length > 1){
            console.error('single属性下，selected最多只能有一个默认项')
            let length = selected.length
            selected.splice(1,length-1)
        }
        this.eventBus.$emit('changeselected', selected)
        // 打开关闭的item
        this.eventBus.$on('additem',(name)=>{
            if(single){
                selected = [name]
            }else{
                selected.push(name)
            }
            this.eventBus.$emit('changeselected',selected)
        })
        // 关闭打开的item
        this.eventBus.$on('removeitem', (name)=>{
            selected.forEach((item,index,arr)=>{
                if(item === name){
                    arr.splice(index,1)
                }
            })
            this.eventBus.$emit('changeselected',selected)
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