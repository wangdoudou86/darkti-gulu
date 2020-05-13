<template>
    <div class="d-popover" @click="onClick" ref="popover">
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
    methods:{
        positionContent(){
            const {contentWrapper, triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper)
            const {width, height, top, bottom, left, right} = triggerWrapper.getBoundingClientRect()
            contentWrapper.style.top = top + window.scrollY + 'px'
            contentWrapper.style.left = left + window.scrollX + 'px'
        },
        documentEvent(e){
            //给document的绑定函数一个执行范围，当它发现点击的范围在内容区域时，就不做任何操作
            if(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target) ){return}
            this.close()
        },
       
        open(){
            this.visible = true
            setTimeout(()=>{
                this.positionContent()
                document.addEventListener('click', this.documentEvent)
            },0)
        },
        close(){
            //只要关闭内容元素，就要把document上的事件移除
            this.visible = false
            document.removeEventListener('click', this.documentEvent)
        },
        onClick(e){
            //只有点击按钮元素才执行下列操作，加上这句会比较保险
            if(this.$refs.triggerWrapper.contains(e.target)){
                if(this.visible){
                    this.close()
                }else{
                    this.open()
                }
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