---
title:  Clipboard 剪贴板
---
Clipboard用于写入/读取剪贴板内容

**使用**
```javascript
// 写入剪贴板
await navigator.clipboard.writeText("Hello");

// 读取剪贴板
const content = await navigator.clipboard.readText();
```
