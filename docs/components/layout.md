---
title: Layout
---

# 布局

<ClientOnly><layout-demo-1/></ClientOnly>
```
<d-layout style="color: white; margin-bottom:50px;">
    <d-header style="height:50px; background: #f3e1e1;">header</d-header>
    <d-content style="height:100px; background: #f1d1d1;">content</d-content>
    <d-footer style="height:50px; background: #f3e1e1;">footer</d-footer>
</d-layout>
```

<ClientOnly><layout-demo-2/></ClientOnly>
```
<d-layout style="color: white; margin-bottom:50px;">
    <d-header style="height:50px; background: #f3e1e1;">header</d-header>
    <d-layout>
        <d-sider style="height:100px; width: 200px; background: #7d5a5a;">sider</d-sider>
        <d-content style="height:100px; background: #f1d1d1;">content</d-content>
    </d-layout>
    <d-footer style="height:50px; background: #f3e1e1;">footer</d-footer>
</d-layout>
```

<ClientOnly><layout-demo-3/></ClientOnly>
```
<d-layout style="color: white; margin-bottom:50px;">
    <d-sider style=" width: 200px; background: #7d5a5a;">sider</d-sider>
    <d-layout>
        <d-header style="height:50px; background: #f3e1e1;">header</d-header>
        <d-content style="height:100px; background: #f1d1d1;">content</d-content>
        <d-footer style="height:50px; background: #f3e1e1;">footer</d-footer>
    </d-layout>
</d-layout>
```