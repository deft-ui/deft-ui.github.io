---
title: 动画
---

## 简介

Deft supports animation, similar to CSS animations.

## 定义动画

与Web中的@keyframes不同，在Deft中，需要通过`animation_cteate`定义动画，当前仅支持`transform`属性。

**示例**

```javascript
// 创建一个旋转动画，动画名称为my-rotate
animation_create("my-rotate", {
    // 开始帧
    "0": {
        transform: 'rotate(0deg)'
    },
    // 结束帧
    "1": {
        transform: 'rotate(360deg)'
    }
});
```

_注意：动画名称应该全局唯一_

## 应用动画

和Web CSS动画类似，Deft通过css应用动画，支持以下CSS属性：

**animation-name** 动画名称，由`animation_create`函数定义

**animation-duration** 动画时间，单位毫秒

**animation-iteration-count** 动画循环次数，默认为1

**示例**

```jsx
<Button style={{
    animationName: 'my-rotate',
    animationDuration: 2000,
}}>MyButton</Button>
```