<template>
    <div>
        <h2>简单用法</h2>
        <p>selected属性，意为一开始默认展开的选项，类型为数组，可同时展开多个选项；</p>
        <p style="font-weight: bold;">预览</p>
        <d-collapse :selected.sync="selectedName">
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
            selectedName: ['1','2']
        }
    }
}
</script>







