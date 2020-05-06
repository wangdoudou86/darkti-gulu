<template>
    <div class="d-tabs-item" @click="xxx">
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
    created(){
        this.eventBus.$on('update:selected',(e)=>{
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
.d-tabs-item{
    height: 100%;
    padding: 0 1.5em;
    border: 1px solid green;
    display: flex;
    align-items: center;
}
</style>