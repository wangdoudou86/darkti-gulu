<template>
    <div>
        <h2>布局一</h2>
        <p style="font-weight: bold;">预览</p>
        <d-layout style="color: white; margin-bottom:50px;">
            <d-header style="height:50px; background: #f3e1e1;">header</d-header>
            <d-content style="height:100px; background: #f1d1d1;">content</d-content>
            <d-footer style="height:50px; background: #f3e1e1;">footer</d-footer>
        </d-layout>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Layout from '../../../src/layout';
import Header from '../../../src/header';
import Content from '../../../src/content';
import Footer from '../../../src/footer';
export default {
    components: {
        'd-layout': Layout,
        'd-header': Header,
        'd-content': Content,
        'd-footer': Footer
    }
}
</script>
