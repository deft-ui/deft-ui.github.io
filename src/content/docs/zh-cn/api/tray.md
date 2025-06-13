---
title:  SystemTray 任务栏图标
---
SystemTray用于创建任务栏右下角图标。

支持Linux/Windows/MacOS平台。

```javascript
const tray = new SystemTray();
tray.title = "My Deft App";
tray.icon = "path/to/icon.png";
// 绑定左键点击事件
tray.bindActivate(() => {
    console.log("clicked");
});
// 设置菜单
tray.setMenus([
    {
        id: "show",
        label: "Show",
        handler() {
            console.log("show menu is clicked");
        }
    },
    {
        id: "exit",
        label: "Exit",
        handler() {
            process.exit(0);
        }
    },
]);
```
