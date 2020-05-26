<template>
    <div>
        <h2>自动关闭</h2>
        <p>通过autoClose设置是否自动关闭，默认3秒后关闭；</p>
        <p>通过position设置弹出位置，默认从上方弹出，值可为top、bottom、middle其中一项；</p>
        <p style="font-weight: bold;">预览</p>
        <d-button @click="onClick('top')">上方弹出</d-button>
        <d-button @click="onClick('middle')">中间弹出</d-button>
        <d-button @click="onClick('bottom')">下方弹出</d-button>
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
        onClick(position){
            this.$toast('你的小可爱弹出来啦~',{
                autoClose: 2,
                position
            })
        }
    }
}
</script>






