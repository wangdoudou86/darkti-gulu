<template>
    <div>
        <d-button>按钮</d-button>
        <d-button icon="settings">按钮</d-button>
        <d-button icon="settings" icon-position="right">按钮</d-button>
        <d-button loading>按钮</d-button>
        
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
import Button from '../../../src/button'
export default {
    components: {
        'd-button': Button
    },
    data(){
        return {
            content: `
            <d-button>按钮</d-button>
            <d-button icon="settings">按钮</d-button>
            <d-button icon="settings" icon-position="right">按钮</d-button>
            <d-button loading>按钮</d-button>
            `
        }
    }
}
</script>
<style lang="scss" scoped>

</style>