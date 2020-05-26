---
title: Collapse
---

# 折叠面板

<ClientOnly><collapse-demo-1/></ClientOnly>

```
<d-collapse :selected.sync="selectedName">
    <d-collapse-item title="标题1" name="1">这是内容1</d-collapse-item>
    <d-collapse-item title="标题2" name="2">这是内容2</d-collapse-item>
    <d-collapse-item title="标题3" name="3">这是内容3</d-collapse-item>
</d-collapse>

data: {
    selectedName: ['1','2']
}
```

<ClientOnly><collapse-demo-2/></ClientOnly>

```
<d-collapse :selected.sync="selectedName" single>
    <d-collapse-item title="标题1" name="1">这是内容1</d-collapse-item>
    <d-collapse-item title="标题2" name="2">这是内容2</d-collapse-item>
    <d-collapse-item title="标题3" name="3">这是内容3</d-collapse-item>
</d-collapse>

data: {
    selectedName: ['2']
}
```