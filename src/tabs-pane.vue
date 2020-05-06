<template>
    <div class="d-tabs-pane">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'DarkTabsPane',
    props:{
        name: {
            type: [String,Number],
            required: true
        }
    },
    inject: ['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(e)=>{
        })
    },
}
</script>
<style lang="scss" scoped>

</style>