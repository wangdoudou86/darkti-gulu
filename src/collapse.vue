<template>
    <div class="d-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'DarkCollapse',
    props: {
        selected: {
            type: Array
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        console.log(this.selected);
        this.eventBus.$emit('update:seleted', this.selected)
    }
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.d-collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>