---
title:  Audio 音频
---
Audio用于播放音频文件。

```javascript
const audio = new Audio({
    sources: ["https://xxx/bgm.mp3"],
    autoLoop: true,
});
// 监听当前播放进度
audio.bindTimeUpdate((e) => {
    console.log("time updated", e.detail);
});
// 开始播放
audio.play();
```
