---
title: Toast
---

# Toast提示框

<ClientOnly><toast-demo-1/></ClientOnly>

```
<d-button @click="onClick('top')">上方弹出</d-button>
<d-button @click="onClick('bottom')">中间弹出</d-button>
<d-button @click="onClick('middle')">下方弹出</d-button>

methods: {
    onClick(position){
        this.$toast('你的小可爱弹出来啦~',{
            autoClose: 2,
            position
        })
    }
}
```

<ClientOnly><toast-demo-2/></ClientOnly>

```
<d-button @click="onClick">上方弹出</d-button>

methods: {
    onClick(){
        this.$toast('狠心一点，把我关了吧',{
            autoClose: false,
            closeButton: {
                text: '欧克',
                callback: function(){
                    console.log('我已经狠心地把它关了')
                }
            }
        })
    }
}
```

<ClientOnly><toast-demo-3/></ClientOnly>

```
<d-button @click="onClick">上方弹出</d-button>

methods: {
    onClick(){
        this.$toast('<span style="color: #ad6989">我变颜色了吗</span>',{
            enableHtml: true,
            autoClose: false,
            closeButton: {
                text: 'yes'
            }
        })
    }
}
```