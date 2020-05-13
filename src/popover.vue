<template>
    <div class="d-popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
    mounted(){
        // console.log(this.$refs.triggerWrapper,'triggerWrapper');
        
    },
    methods:{
        xxx(){
            this.visible = !this.visible
            if(this.visible){
                setTimeout(()=>{
                    const {contentWrapper, triggerWrapper} = this.$refs
                    document.body.appendChild(contentWrapper)
                    const {width, height, top, bottom, left, right} = triggerWrapper.getBoundingClientRect()
                    contentWrapper.style.top = top + window.scrollY + 'px'
                    contentWrapper.style.left = left + window.scrollX + 'px'
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
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    border: 1px solid green;
    position: absolute;
    // bottom: 100%;
    // left: 0;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
}
</style>