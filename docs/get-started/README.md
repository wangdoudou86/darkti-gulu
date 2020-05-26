---
title: 快速上手
---

# 快速上手

### 引入Dark

- 完整组件列表和引入方式
```
import Vue from 'vue';
import {
    Button, 
    ButtonGroup, 
    Icon, 
    Row, 
    Col, 
    Input, 
    Content, 
    Footer,
    Header, 
    Layout, 
    Sider, 
    Tabs, 
    TabsHead, 
    TabsItem, 
    TabsBody, 
    TabsPane, 
    Popover, 
    Collapse, 
    CollapseItem, 
    ToastPlugin
} from 'dark';

Vue.use(ToastPlugin)
new Vue({
  el: '#app',
  components: {
    'd-button': Button,
    'd-button-group': ButtonGroup,
    'd-icon': Icon,
    'd-row': Row,
    'd-col': Col,
    'd-input': Input,
    'd-content': Content,
    'd-footer': Footer,
    'd-header': Header,
    'd-layout': Layout,
    'd-sider': Sider,
    'd-tabs': Tabs,
    'd-tabs-head': TabsHead,
    'd-tabs-item': TabsItem,
    'd-tabs-body': TabsBody,
    'd-tabs-pane': TabsPane,
    'd-popover': Popover,
    'd-collapse': Collapse,
    'd-collapse-item': CollapseItem
  }
})
```