---
title:  Audio
---
Audio used to play audio files.

```javascript
const audio = new Audio({
    sources: ["https://xxx/bgm.mp3"],
    autoLoop: true,
});
// Monitor the current playback progress
audio.bindTimeUpdate((e) => {
    console.log("time updated", e.detail);
});
// Start playing
audio.play();
```
