---
title:  FileDialog
---
`fileDialog` is a global variable used to open, save, etc. file operations.

**Usage**

```javascript
const files = await fileDialog.show({
    dialogType: "multiple",
});
console.log("selected files: ", e);
```