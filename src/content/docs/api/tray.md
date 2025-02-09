---
title:  SystemTray 任务栏图标
---
SystemTray用于创建任务栏右下角图标。

当前仅支持Linux平台。

```
const tray = new SystemTray();
tray.title = "My Deft App";
tray.icon = "path/to/icon.png";
// 绑定左键点击事件
tray.bindActivate(() => {
    console.log("clicked");
});
// 绑定菜单点击事件
tray.bindMenuClick((e) => {
    console.log("menu clicked", e.detail.id)
});
// 设置菜单
tray.setMenus([
    {id: "show", label: "Show"},
    {id: "exit", label: "Exit"},
]);
```
