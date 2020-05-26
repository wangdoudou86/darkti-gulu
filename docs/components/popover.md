---
title: Popover
---

# 弹出层

<ClientOnly><popover-demo-1/></ClientOnly>

```
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
```

<ClientOnly><popover-demo-2/></ClientOnly>

```
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
```