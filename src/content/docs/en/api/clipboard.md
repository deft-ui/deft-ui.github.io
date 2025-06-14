---
title:  Clipboard
---
Clipboard used to write/read clipboard content.

**使用**
```javascript
// 写入剪贴板
await navigator.clipboard.writeText("Hello");

// 读取剪贴板
const content = await navigator.clipboard.readText();
```
