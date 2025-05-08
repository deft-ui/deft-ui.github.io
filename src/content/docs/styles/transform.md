---
title: <transform>
---

`<transform>` 允许你旋转、缩放、倾斜或平移给定元素，目前支持以下函数。

- scale(dx, dy)
- translate(dx, dy)
- rotate(angle)

支持组合多个函数，比如：

```css
.ani {
    transform: translate(10, 10) rotate(30);
}
```