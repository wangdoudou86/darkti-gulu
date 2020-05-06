<template>
    <div class="d-tabs-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'DarkTabsItem',
    props:{
        name: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
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