<template>
    <div>
        <h2>设置响应式</h2>
        <p>属性iPad范围值为577px ~ 768px;</p>
        <p>属性narrowPc范围值为769px ~ 922px;</p>
        <p>属性pc范围值为923px ~ 1200px;</p>
        <p>属性wide-pc范围值为1201px及以上;</p>
        <p style="font-weight: bold;">预览</p>
        <d-row>
            <d-col class='colDiv' span='24' :ipad="{span:'12'}" :pc="{span:8}">aaa</d-col>
            <d-col class='colDiv' span='24' :ipad="{span:'12'}" :pc="{span:8,offset:8}">bbb</d-col>
        </d-row>
        <p style="font-weight: bold;">代码</p>

    </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
    components: {
        'd-row': Row,
        'd-col': Col
    }
}
</script>
<style lang="scss" scoped>
*{box-sizing: border-box;}
.colDiv{
    height: 50px;
    border: 1px solid #ccc;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>