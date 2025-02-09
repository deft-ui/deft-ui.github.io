---
title:  Worker 后台线程
---
Worker用于创建后台线程。

**使用**

```
const worker = new Worker("worker-index.js");
worker.postMessage("hello");
worker.bindMessage((e) => {
    console.log("receive msg", e);
});
```
