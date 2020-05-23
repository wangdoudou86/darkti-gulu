<template>
    <div>
        <h2>设置空隙offset</h2>
        <p>offset产生的空隙始终在左边</p>
        <p style="font-weight: bold;">预览</p>
        <d-row>
            <d-col span='8'><div class="colDiv">8</div></d-col>
            <d-col span='6' offset='10'><div class="colDiv">6</div></d-col>
        </d-row>
        <d-row gutter="10">
            <d-col span='6' offset='4'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='4' offset='4'><div class="colDiv">4</div></d-col>
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