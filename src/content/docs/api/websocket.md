---
title:  WebSocket
---
WebSocket用于创建持久长连接。

**使用**

```
const ws = new WebSocket("wss://xxxx");
ws.onopen = () => {
    console.log("connection opened");
}
ws.onmessage = (e) => {
    console.log("receive message", e.data);
}
ws.onerror = (e) => {
    console.error('connection error', e);
};
```