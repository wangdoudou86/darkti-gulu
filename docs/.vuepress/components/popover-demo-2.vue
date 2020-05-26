<template>
    <div>
        <h2>hover触发弹出层</h2>
        <p style="font-weight: bold;">预览</p>
        <d-popover trigger="hover">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>hover上方</d-button>
        </d-popover>

        <d-popover position="bottom" trigger="hover">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>hover下方</d-button>
        </d-popover>

        <d-popover position="left" trigger="hover">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>hover左边</d-button>
        </d-popover>

        <d-popover position="right" trigger="hover">
            <template v-slot:content>
                <span>这是一段内容</span>
            </template>  
            <d-button>hover右边</d-button>
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






