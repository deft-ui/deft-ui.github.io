---
title:  Fetch 网络请求
---

Fetch用于发起Http请求

**使用**
```
const rsp = await fetch("https://deft-ui.github.io");
const result = await rsp.json();
console.log(result);
```