<template>
    <div class="d-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'DarkButtonGroup',
    mounted(){
        for(let node of this.$el.children){
            let name = node.nodeName.toLowerCase()
            if(name !== 'button'){
                console.warn(`d-button-group 的子元素应该全是 d-button，不应该是${name}`);
            }
        }
    }
}
</script>
<style lang="scss">
    .d-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .d-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px; //解决border重合问题
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{ //hover时让边框浮到最上面
                position: relative;
                z-index: 1;
            }
        }
    }
</style>