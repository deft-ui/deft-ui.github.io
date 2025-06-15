---
title:  Fetch
---

Fetch used to initiate Http requests.

**Usage**
```javascript
const rsp = await fetch("https://deft-ui.github.io");
const result = await rsp.json();
console.log(result);
```