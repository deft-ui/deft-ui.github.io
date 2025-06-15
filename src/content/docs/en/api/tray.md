---
title:  SystemTray
---
SystemTray used to create icons in the taskbar.

Supports Linux/Windows/MacOS platforms.

```javascript
const tray = new SystemTray();
tray.title = "My Deft App";
tray.icon = "path/to/icon.png";
// Bind click event
tray.bindActivate(() => {
    console.log("clicked");
});
// Set menus
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
