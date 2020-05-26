<template>
    <div class="wrapper" :class="positionClass">
        <div class="g-toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>  
                <div v-else v-html="$slots.default"></div>
            </div>
            <div class="line" ref="line" v-if="!autoClose"></div>
            <span class="closeText" v-if="!autoClose" @click="onClickClose">{{closeButton.text}}</span>
        </div>    
    </div>
</template>
<script>

export default {
    name: 'GuluToast',
    props:{
        autoClose: {
            type: [Boolean, Number],
            default: 3,
            validator(value){
                return value === false || typeof value === 'number'
            }
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
        },
        position: {
            type: String,
            default: 'top',
            validator(value){
                return ['top', 'bottom', 'middle'].indexOf(value) !== -1
            }
        }
    },
    mounted(){
        //自动关闭时不需要有那条线了
        if(this.autoClose){
            setTimeout(()=>{
                this.close()
            }, this.autoClose * 1000)
        }else{  
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        }
    },
    computed: {
        positionClass(){
            let position = this.position
            return [position && `position-${position}`]
        }
    },
    methods: {
        //销毁toast实例
        close(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        //点击关闭按钮
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
$animation-duration: 300ms;

@keyframes up-slide{
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes down-slide{
    0%{
        opacity: 0;
        transform: translateY(100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes middle-fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
// 做两个div，外面的居中，里面的做动画
.wrapper{
    position: fixed;
    z-index: 999;
    left: 50%;
    &.position-top{
        top: 0;
        transform: translateX(-50%);
        .g-toast{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: up-slide $animation-duration;
        }
    }
    &.position-middle{
        top: 50%;
        transform: translate(-50%,-50%);
        .g-toast{
            animation: middle-fade $animation-duration;
        }
    }
    &.position-bottom{
        bottom: 0;
        transform: translateX(-50%);
        .g-toast{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: down-slide $animation-duration;
        }
        
    }
    .g-toast{
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
        .message{ padding: 8px 0; }
        .line{ height: 100%; border: 1px solid #555; margin: 0 16px; }
        .closeText{ flex-shrink: 0; cursor: pointer; }
    }

}
</style>