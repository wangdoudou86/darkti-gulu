<template>
    <div>
        <h2>布局二</h2>
        <p style="font-weight: bold;">预览</p>
        <d-layout style="color: white; margin-bottom:50px;">
            <d-header style="height:50px; background: #f3e1e1;">header</d-header>
            <d-layout>
                <d-sider style="height:100px; width: 200px; background: #7d5a5a;">sider</d-sider>
                <d-content style="height:100px; background: #f1d1d1;">content</d-content>
            </d-layout>
            <d-footer style="height:50px; background: #f3e1e1;">footer</d-footer>
        </d-layout>
        <p style="font-weight: bold;">代码</p>
        
    </div>
</template>
<script>
import Layout from '../../../src/layout';
import Header from '../../../src/header';
import Content from '../../../src/content';
import Sider from '../../../src/sider';
import Footer from '../../../src/footer';
export default {
    components: {
        'd-layout': Layout,
        'd-header': Header,
        'd-content': Content,
        'd-sider': Sider,
        'd-footer': Footer
    }
}
</script>
