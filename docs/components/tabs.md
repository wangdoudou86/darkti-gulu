---
title: Tabs
---

# 标签页

<ClientOnly><tabs-demo-1/></ClientOnly>
```
<d-tabs :selected.sync="selectedItem">
    <d-tabs-head>
        <d-tabs-item name="entertainment" >娱乐</d-tabs-item>
        <d-tabs-item name="society" >社会</d-tabs-item>
        <d-tabs-item name="sports" disabled>体育</d-tabs-item>
    </d-tabs-head>
    <d-tabs-body>
        <d-tabs-pane name="entertainment">这里是娱乐</d-tabs-pane>
        <d-tabs-pane name="society">这里是社会</d-tabs-pane>
        <d-tabs-pane name="sports">这里是体育</d-tabs-pane>
    </d-tabs-body>
</d-tabs>

data: {
    selectedItem: 'society'
}
```