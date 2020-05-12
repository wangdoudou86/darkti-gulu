<template>
    <div class="d-popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
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
            if(this.visible){
                console.log('11111')
                setTimeout(()=>{
                    let eventHandler = ()=>{
                        this.visible = false
                        console.log('document的关闭')
                        document.removeEventListener('click', eventHandler)
                        console.log('删除x函数')
                    }
                    document.addEventListener('click', eventHandler)
                },0)
                
            }else{
                console.log('关闭');
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.d-popover{
    border: 1px solid red;
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