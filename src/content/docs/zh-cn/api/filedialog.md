---
title:  FileDialog 文件对话框
---
`fileDialog`全局变量用于打开、保存等选择文件操作。

**使用**

```javascript
const files = await fileDialog.show({
    dialogType: "multiple",
});
console.log("selected files: ", e);
```