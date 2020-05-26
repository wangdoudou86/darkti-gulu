<template>
    <div>
        <h2>设置posotion</h2>
        <p>通过position设置标签的位置，position默认为top，值可为top，bottom，left，right其中一个；</p>
        <p style="font-weight: bold;">预览</p>
        <d-tabs :selected.sync="selectedItem" position="bottom">
            <d-tabs-head>
                <d-tabs-item name="entertainment" >娱乐</d-tabs-item>
                <d-tabs-item name="society" >社会</d-tabs-item>
                <d-tabs-item name="sports">体育</d-tabs-item>
            </d-tabs-head>
            <d-tabs-body>
                <d-tabs-pane name="entertainment">这里是娱乐</d-tabs-pane>
                <d-tabs-pane name="society">这里是社会</d-tabs-pane>
                <d-tabs-pane name="sports">这里是体育</d-tabs-pane>
            </d-tabs-body>
        </d-tabs>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Button from '../../../src/button'
import Tabs from '../../../src/tabs';
import TabsBody from '../../../src/tabs-body';
import TabsHead from '../../../src/tabs-head';
import TabsItem from '../../../src/tabs-item';
import TabsPane from '../../../src/tabs-pane';
export default {
    components: {
        'd-button': Button,
        'd-tabs': Tabs,
        'd-tabs-body': TabsBody,
        'd-tabs-head': TabsHead,
        'd-tabs-item': TabsItem,
        'd-tabs-pane': TabsPane
    },
    data(){
        return {
            selectedItem: 'entertainment'
        }
    }
}
</script>






