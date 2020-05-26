<template>
    <div>
        <h2>设置enableHtml</h2>
        <p>通过设置enableHtml来控制是否可以支持HTML；</p>
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
            this.$toast('<span style="color: #ad6989">我变颜色了吗</span>',{
                enableHtml: true,
                autoClose: false,
                closeButton: {
                    text: 'yes'
                }
            })
        }
    }
}
</script>






