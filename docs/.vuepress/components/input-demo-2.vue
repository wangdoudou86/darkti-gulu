<template>
    <div>
        <h2>双向绑定</h2>
        <p style="font-weight: bold;">预览</p>
        <d-input v-model='value'></d-input>
        <div>value: {{value}}</div>
        <p style="font-weight: bold;">代码</p>
    </div>
</template>
<script>
import Input from '../../../src/input'
export default {
    components: {
        'd-input': Input
    },
    data(){
        return {
            value: 'hi'
        }
    }
}
</script>
