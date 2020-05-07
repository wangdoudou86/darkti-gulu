<template>
    <div class="d-tabs-item" @click="clickItem" :class="itemClass" :disabled="disabled">
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
            active: false
        }
    },
    mounted(){
        this.eventBus.$on('update:selected',(data)=>{
            // if(data === this.name){
            //     this.active = true
            // }else{
            //     this.active = false
            // }
            this.active = data === this.name
        })
    },
    computed: {
        itemClass(){
            return {active: this.active, disabled: this.disabled}
        }
    },
    methods:{
        clickItem(){
            if(this.disabled) return
            this.eventBus.$emit('update:selected',this.name,this)
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
    &.active{
        color: $active-color;
    }
    &.disabled{
        color: #ddd;
        cursor: not-allowed;
    }
}
</style>