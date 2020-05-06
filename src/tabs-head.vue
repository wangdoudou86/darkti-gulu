<template>
    <div class="d-tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DarkTabsHead',
    inject: ['eventBus'],
    created(){
        
        
    }
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.d-tabs-head{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999;
    height: $tabs-height;
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>