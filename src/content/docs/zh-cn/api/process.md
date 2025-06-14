---
title:  Process 进程
---
process用于控制进程、获取环境信息等。

**退出当前进程**

```javascript
process.exit(0);
```

**获取命令行参数**

```javascript
const argv = process.argv;
```

**判断是否为移动平台**

```javascript
const isMobile = process.isMobilePlatform;
```

**捕获未处理的promise rejection**

```javascript
process.setPromiseRejectionTracker((e) => {
    console.log("promise rejection", e);
});
```
