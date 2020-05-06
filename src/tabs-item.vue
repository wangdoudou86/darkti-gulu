<template>
    <div class="d-tabs-item" @click="xxx" :class="itemClass">
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
            if(data === this.name){
                this.active = true

            }else{
                this.active = false
            }
        })
    },
    computed: {
        itemClass(){
            return {active: this.active}
        }
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
$active-color: #409eff;
.d-tabs-item{
    height: 100%;
    padding: 0 1em;
    border: 1px solid green;
    display: flex;
    align-items: center;
    &.active{
        color: $active-color;
    }
}
</style>