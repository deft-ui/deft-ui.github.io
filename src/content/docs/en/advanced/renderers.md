---
title: 渲染器
---

### 简介

Deft内建了以下3种渲染器。

| 名称         | 说明          | 支持平台                         |
|------------|-------------|------------------------------|
| SoftBuffer | CPU渲染       | Windows/MacOS/Linux          | 
| GL         | GPU渲染       | Windows/MacOS/Linux/Android  | 
| SoftGL     | CPU渲染，GPU呈现 | Windows/MacOS/Linux/Android  |

通常，`GL`渲染器拥有更好的性能，但是会占用更多的内存，而`SoftGL`适合不支持`SoftBuffer`但是又想使用CPU渲染的场景。

默认情况下，Deft会根据系统支持情况，按照表里的顺序，自动匹配到一个可用的渲染器。如果你希望更改默认的匹配顺序，可以通过以下方法设置。

1. 创建窗口时，指定`preferredRenderes`参数，比如：
   ```javascript
    const window = new Window({
        // 优先使用GL渲染器
        preferredRenderers: ["GL", "SoftBuffer"]
    });
   ```
2. 设置`DEFT_RENDERERS`环境变量，对所有Deft应用生效，比如：
   ```
   export DEFT_RENDERERS=GL,SoftBuffer
   ```