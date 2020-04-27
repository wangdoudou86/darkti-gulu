<template>
    <div class="g-toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>  
            <div v-else v-html="$slots.default"></div>
        </div>
        <div class="line" ref="line" v-if="!autoClose"></div>
        <span class="closeText" v-if="!autoClose" @click="onClickClose">{{closeButton.text}}</span>
        
    </div>    
</template>
<script>

export default {
    name: 'GuluToast',
    props:{
        autoClose: {
            type: Boolean,
            default: true
        },
        closeDelay: {
            type: Number,
            default: 3
        },
        closeButton: {
            type: Object,
            default(){   // 一定注意type是对象或数组，default必须写成函数形式
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(()=>{
                this.close()
            }, this.closeDelay * 1000)
        }else{
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        }
    },
    methods: {
        //销毁toast实例
        close(){
            this.$el.remove()
            this.$destroy()
        },
        //点击关系按钮
        onClickClose(){
            this.close()
            if(this.closeButton && typeof this.closeButton.callback === 'function' ){
                this.closeButton.callback(this)  //一般都会把自己这个实例传出去，用户用不用在于他自己
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);
$min-toast-height: 40px;
.g-toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    color: white;
    border-radius: 4px;
    background-color: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    min-height: $min-toast-height;
    line-height: 1.8;
    display: flex;
    align-items: center;
    .message{
        padding: 8px 0;
    }
    
    .line{
        height: 100%;
        border: 1px solid red;
        margin: 0 16px;
    }
    .closeText{
        flex-shrink: 0;
    }
}
</style>