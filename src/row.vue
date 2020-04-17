<template>
   <div class="row">
       <slot></slot>
   </div>
</template>
<script>
export default {
    name: 'GuluRow'
}
</script>
<style lang="scss">
.row{
    display: flex;
}
</style>