<template>
    <div class="d-tabs-head">
        <slot></slot>
        <slot name="actions"></slot>

    </div>
</template>
<script>
export default {
    name: 'DarkTabsHead'
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.d-tabs-head{
    display: flex;
    align-items: center;
    border: 1px solid pink;
    height: $tabs-height;
}
</style>