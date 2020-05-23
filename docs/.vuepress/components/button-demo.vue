<template>
    <div>
        <h2>简单用法</h2>
        <p style="font-weight: bold;">预览</p>
        <d-button>按钮</d-button>
        <d-button icon="settings">按钮</d-button>
        <d-button icon="settings" icon-position="right">按钮</d-button>
        <d-button loading>按钮</d-button>
        <p style="font-weight: bold;">代码</p>
    </div>
</template>
<script>
import Button from '../../../src/button'
export default {
    components: {
        'd-button': Button
    }
}
</script>
