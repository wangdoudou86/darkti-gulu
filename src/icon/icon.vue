<template>
    <svg class="d-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './iconfont.js'
export default {
    name: 'DarkIcon',
    props:['name']
}
</script>
<style lang="scss">
.d-icon { width: 1em; height: 1em; }
</style>