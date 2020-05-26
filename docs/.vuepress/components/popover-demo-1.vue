<template>
    <div>
        <h2>点击触发弹出层</h2>
        <p style="font-weight: bold;">预览</p>
        <d-popover>
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>上方出现</d-button>
        </d-popover>

        <d-popover position="bottom">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>下方出现</d-button>
        </d-popover>

        <d-popover position="left">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>左边出现</d-button>
        </d-popover>

        <d-popover position="right">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>右边出现</d-button>
        </d-popover>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Button from '../../../src/button'
import Popover from '../../../src/popover'

export default {
    components: {
        'd-button': Button,
        'd-popover': Popover
    },
}
</script>






