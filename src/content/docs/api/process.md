---
title:  Process 进程
---
process用于控制进程、获取环境信息等。

**退出当前进程**

```
process.exit(0);
```

**获取命令行参数**

```
const argv = process.argv;
```

**判断是否为移动平台**

```
const isMobile = process.isMobilePlatform;
```

**捕获未处理的promise rejection**

```
process.setPromiseRejectionTracker((e) => {
    console.log("promise rejection", e);
});
```
