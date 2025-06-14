---
title: Selector
---

Deft supports class selectors, attribute selectors, pseudo-class selectors, pseudo-element selectors, and combinators.

### Class Selectors


```css
.title {
    color: #FFF;
}
```

### Attribute Selectors

```css
[name="my-name"] {
    color: #FFF;
}
```

### Pseudo-class Selectors

```css
button:hover {
    color: #F00;
}
```

### Pseudo-element Selectors

```css
/* 设置滚动条样式 */
scroll::scrollbar {
    background: #E1E1E1;
}

scroll::scrollbar-thumb {
    background: #C1C1C1;
}
```

### Combinators

```css
.title .name {
    color: #F00;
}
```