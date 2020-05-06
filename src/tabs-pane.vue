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
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>

</style>