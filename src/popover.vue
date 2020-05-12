<template>
    <div class="d-popover" @click="xxx">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'DarkPopover',
    data(){
        return{
            visible: false
        }
    },
    methods:{
        xxx(){
            this.visible = !this.visible
        }
    }
}
</script>
<style lang="scss" scoped>
.d-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    > .content-wrapper{
        border: 1px solid green;
        position: absolute;
        bottom: 100%;
        left: 0;
    }
}
</style>