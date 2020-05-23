<template>
    <div>
        <h2>设置justify</h2>
        <p>justify属性为row水平方向的放置位置，值只能为'left', 'center', 'right'中其中一项</p>
        <p style="font-weight: bold;">预览</p>
        <d-row gutter="20" justify='center'>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
        </d-row>
        <d-row justify='right'>
            <d-col span='5'><div class="colDiv">5</div></d-col>
            <d-col span='10'><div class="colDiv">10</div></d-col>
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