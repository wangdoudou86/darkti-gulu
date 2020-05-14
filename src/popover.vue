<template>
    <div class="d-popover"  ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper" :class="positionClass">
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
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value){
                return ['click', 'hover'].indexOf(value) >= 0
            }
        }
    },
    data(){
        return{
            visible: false
        }
    },
    mounted(){
        //你在这里面添加事件，vue是不知道的，所以你需要手动在destroyed里面移除事件
        if(this.trigger === 'click'){
            this.$refs.popover.addEventListener('click', this.onClick)
        }else if(this.trigger === 'hover'){
            this.$refs.popover.addEventListener('mouseenter', this.open)
            this.$refs.popover.addEventListener('mouseleave', this.close)
        } 
    },
    destroyed(){
        if(this.trigger === 'click'){
            this.$refs.popover.removeEventListener('click', this.onClick)
        }else if(this.trigger === 'hover'){
            this.$refs.popover.removeEventListener('mouseenter', this.open)
            this.$refs.popover.removeEventListener('mouseleave', this.close)
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
            const {width, height, top, left } = triggerWrapper.getBoundingClientRect()
            const { height: height2 } = contentWrapper.getBoundingClientRect()
            let positionObj = {
                top:{ top: top + window.scrollY , left: left + window.scrollX },
                bottom:{ top: height + top + window.scrollY, left: left + window.scrollX },
                left:{ top: top + window.scrollY - (height2 - height)/2, left: left + window.scrollX },
                right:{ top: top + window.scrollY - (height2 - height)/2, left: left + window.scrollX + width }
            }
            contentWrapper.style.top = positionObj[this.position].top + 'px'  
            contentWrapper.style.left = positionObj[this.position].left + 'px'    
        },
        documentEvent(e){
            //给document的绑定函数一个执行范围，当它发现点击的范围在内容区域时，就不做任何操作
            if(this.$refs.contentWrapper && (this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target)) ){return}
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
    filter: drop-shadow(0 0 3px rgba(51,51,51,0.4));
    background-color: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        position: absolute;
    }

    &.position-top{
        margin-top: -10px;
        transform: translateY(-100%);
        &::before,&::after{
            border-bottom: none;
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
    &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
            border-top: none;
            left: 10px;
        }
        &::before{
            border-bottom-color: black;
            bottom: 100%;
        }
        &::after{
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left{
        margin-left: -10px;
        transform: translateX(-100%);
        &::before,&::after{
            border-right: none;
            top: 10px;
        }
        &::before{
            border-left-color: black;
            left: 100%;
        }
        &::after{
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left: 10px;
        &::before,&::after{
            border-left: none;
            top: 10px;
        }
        &::before{
            border-right-color: black;
            right: 100%;
        }
        &::after{
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }
}
</style>