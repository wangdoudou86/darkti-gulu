<template>
    <div>
        <h2>设置关闭按钮</h2>
        <p style="font-weight: bold;">预览</p>
        <d-button @click="onClick">上方弹出</d-button>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Button from '../../../src/button'
import Plugin from '../../../src/plugin'
import Vue from 'vue'

Vue.use(Plugin)

export default {
    components: {
        'd-button': Button
    },
    methods: {
        onClick(){
            this.$toast('狠心一点，把我关了吧',{
                autoClose: false,
                closeButton: {
                    text: '欧克',
                    callback: function(){
                        console.log('我已经狠心地把它关了')
                    }
                }
            })
        }
    }
}
</script>






