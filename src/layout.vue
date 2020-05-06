<template>
    <div class="d-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'DarkLayout',
    data(){
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'DarkSider'){
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.d-layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    &.hasSider{
        flex-direction: row;
    }
}
</style>