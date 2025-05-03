---
title:  Window 窗体
---
Window用于窗体创建、更新等操作。

PC平台支持创建多个窗体，Mobile平台仅支持创建一个窗体。

**使用**

```javascript
const window = new Window();
// 设置标题
window.title = "My Deft App";
// 监听事件
window.bindResize((e) => {
    console.log("window resized", e);
});
// 修改窗体大小（仅PC平台生效）
window.resize({
    width: 600,
    height: 400
});
```