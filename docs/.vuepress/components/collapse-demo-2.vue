<template>
    <div>
        <h2>设置single</h2>
        <p>single属性，意为同时只能展开一个选项；</p>
        <p style="font-weight: bold;">预览</p>
        <d-collapse :selected.sync="selectedName" single>
            <d-collapse-item title="标题1" name="1">这是内容1</d-collapse-item>
            <d-collapse-item title="标题2" name="2">这是内容2</d-collapse-item>
            <d-collapse-item title="标题3" name="3">这是内容3</d-collapse-item>
        </d-collapse>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
    components: {
        'd-collapse': Collapse,
        'd-collapse-item': CollapseItem
    },
    data(){
        return {
            selectedName: ['2']
        }
    }
}
</script>







