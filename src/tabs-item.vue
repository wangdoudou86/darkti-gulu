<template>
   <!-- 加个data-name主要是为了测试方便 -->
    <div class="d-tabs-item" @click="clickItem" :class="itemClass"  :disabled="disabled" :data-name="name">
        <slot></slot>   
    </div>
</template>
<script>
export default {
    name: 'DarkTabsItem',
    props:{
        name: {
            type: [String,Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    inject: ['eventBus'],
    data(){
        return {
            active: false,
            position: ''
        }
    },
    mounted(){
        if(this.eventBus){  //单元测试时测出来的小问题
            this.eventBus.$on('changeitem',(data)=>{
                this.active = data === this.name
            })
        }
    },
    computed: {
        itemClass(){
            let { active, disabled, position } = this
            return [{active: active, disabled: disabled}, position && `item-${position}`]
        }
    },
    methods:{
        clickItem(){
            if(this.disabled) return
            this.eventBus && this.eventBus.$emit('changeitem',this.name,this)
            this.$emit('click',this)  //这句为了单元测试检验是否触发了事件
        }
    }
}
</script>
<style lang="scss" scoped>
$active-color: #409eff;
.d-tabs-item{
    height: 100%;
    padding: 0 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active{
        color: $active-color;
    }
    &.disabled{
        color: #ddd;
        cursor: not-allowed;
    }
    &.item-left,&.item-right{
        padding: 0 1em;
        height: 50px;
    }
}
</style>