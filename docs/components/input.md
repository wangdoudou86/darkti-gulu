---
title: Input
---

# 输入框

<ClientOnly><input-demo-1/></ClientOnly>

```
<d-input value="逗逗"></d-input>
<d-input value="禁用" disabled></d-input>
<d-input value="只可读" readonly></d-input>
```
<ClientOnly><input-demo-2/></ClientOnly>

```
<d-input v-model='value'></d-input>
<div>value: {{value}}</div>

data: {
    value: 'hi'
}
```

