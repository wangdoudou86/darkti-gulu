<template>
    <div>
        <h2>24格网格</h2>
        <p style="font-weight: bold;">预览</p>
        <d-row>
            <d-col span='8'><div class="colDiv">8</div></d-col>
            <d-col span='8'><div class="colDiv">8</div></d-col>
            <d-col span='8'><div class="colDiv">8</div></d-col>
        </d-row>
        <d-row>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
            <d-col span='6'><div class="colDiv">6</div></d-col>
        </d-row>
        <d-row>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
            <d-col span='4'><div class="colDiv">4</div></d-col>
        </d-row>
        <d-row>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
            <d-col span='2'><div class="colDiv">2</div></d-col>
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