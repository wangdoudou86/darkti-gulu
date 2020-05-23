<template>
    <div>
        <h2>设置gutter</h2>
        <p>gutter单位为像素，使用时不加"px"</p>
        <p style="font-weight: bold;">预览</p>
        <d-row gutter="20">
            <d-col span='8'><div class="colDiv">8</div></d-col>
            <d-col span='8'><div class="colDiv">8</div></d-col>
            <d-col span='8'><div class="colDiv">8</div></d-col>
        </d-row>
        <d-row gutter="10">
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
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
*{box-sizing: border-box; }
.colDiv{
    height: 50px;
    border: 1px solid #ccc;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>