<template>
    <div>
        <h2>简单用法</h2>
        <p style="font-weight: bold;">预览</p>
        <d-input value="逗逗"></d-input>
        <d-input value="禁用" disabled></d-input>
        <d-input value="只可" readonly></d-input>
        <p style="font-weight: bold;">代码</p>
    </div>
</template>
<script>
import Input from '../../../src/input'
export default {
    components: {
        'd-input': Input
    }
}
</script>
