---
title: <transform>
---

`<tarnsform>` allows you to rotate, scale, skew, or translate a given element, currently supports the following functions.

- scale(dx, dy)
- translate(dx, dy)
- rotate(angle)

Support combining multiple functions, such as:

```css
.ani {
    transform: translate(10, 10) rotate(30);
}
```