<template>
    <div class="d-popover" @click="onClick" ref="popover" :class="positionClass">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'DarkPopover',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value){
                return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return{
            visible: false
        }
    },
    computed: {
        positionClass(){
            let { position } = this
            return [position && `position-${position}`]
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
            if(this.$refs.contentWrapper && (this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target)) ){return}
            this.close()
            console.log('出发啦');
            
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
            // if(this.$refs.triggerWrapper.contains(e.target)){
                if(this.visible){
                    this.close()
                }else{
                    console.log('click button');
                    
                    this.open()
                }
            // }
            
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.d-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    border: 1px solid $border-color;
    border-radius: $border-radius;
    position: absolute;
    // bottom: 100%;
    // left: 0;
    filter: drop-shadow(0 0 3px rgba(51,51,51,0.4));
    background-color: white;
    transform: translateY(-100%);
    padding: .5em 1em;
    margin-top: -10px;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        position: absolute;
        left: 10px;
    }
    &::before{
        border-top-color: black;
        top: 100%;
    }
    &::after{
        border-top-color: white;
        top: calc(100% - 1px);
    }
}
</style>