<template>
    <div class="g-toast">
        <slot></slot>
    </div>    
</template>
<script>

export default {
    name: 'GuluToast',
    props:{
        autoClose: {
            type: Boolean,
            default: true
        },
        closeDelay: {
            type: Number,
            default: 3
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(()=>{
                this.$el.remove()
                this.$destroy()
            },this.closeDelay * 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    color: white;
    border-radius: 4px;
    background-color: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    height: 40px;
    line-height: 1.8;
    display: flex;
    align-items: center;
}
</style>