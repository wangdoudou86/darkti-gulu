<template>
    <div class="d-tabs-pane" v-if="active">
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
    data(){
        return {
            active: false
        }
    },
    mounted(){
        this.eventBus.$on('changeitem',(data)=>{
            this.active = data === this.name
        })
    },
}
</script>
<style lang="scss" scoped>

</style>