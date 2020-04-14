## 这是一个VUE UI组件
作者：darkTi Wang

[![Build Status](https://www.travis-ci.org/wangdoudou86/darkti-gulu.svg?branch=master)](https://www.travis-ci.org/wangdoudou86/darkti-gulu)

## 介绍
为了练习Vue，写一些简单的小轮子

## 开始使用

1. 添加CSS样式

使用此框架前，请先在css中设置border-box

```
*,*::before,*::after{ box-sizing: border-box; }
```
IE15及以上浏览器都支持此样式

你还需要设置默认颜色等变量（后续会改成SCSS变量）
```
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
```
IE15及以上浏览器都支持此样式

2. 安装darkti-gulu

```
npm i -S darkti-gulu
```

3. 引入darkti-gulu
```
import {Button, ButtonGroup, Icon} from 'darkti-gulu'
import 'darkti-gulu/dist/index.css'
export default {
  name: 'App',
  components: {
    'g-button': Button
  }
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


