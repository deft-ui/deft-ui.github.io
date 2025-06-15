---
title:  Worker
---
Worker used to create background threads.

**Usage**

```javascript
const worker = new Worker("worker-index.js");
worker.postMessage("hello");
worker.bindMessage((e) => {
    console.log("receive msg", e);
});
```
