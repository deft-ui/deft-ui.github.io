---
title:  WebSocket
---
WebSocket used to create a persistent long connection.

**Usage**

```javascript
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