---
title:  Window
---

Window use for window creation, update, etc.

PC platform supports creating multiple windows, while Mobile platforms only support creating one window.

**Usage**

```javascript
const window = new Window();
// Set window title
window.title = "My Deft App";
// Bind window resize event
window.bindResize((e) => {
    console.log("window resized", e);
});
// update window size (only supports PC platform)
window.resize({
    width: 600,
    height: 400
});
```