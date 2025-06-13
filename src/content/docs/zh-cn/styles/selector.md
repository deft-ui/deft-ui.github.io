---
title: 选择器
---

Deft支持类选择器、属性选择器、伪类选择器、伪元素选择器和组合选择器。

### 类选择器


```css
.title {
    color: #FFF;
}
```

### 属性选择器

```css
[name="my-name"] {
    color: #FFF;
}
```

### 伪类选择器

```css
button:hover {
    color: #F00;
}
```

### 伪元素选择器

```css
/* 设置滚动条样式 */
scroll::scrollbar {
    background: #E1E1E1;
}

scroll::scrollbar-thumb {
    background: #C1C1C1;
}
```

### 组合选择器

```css
.title .name {
    color: #F00;
}
```