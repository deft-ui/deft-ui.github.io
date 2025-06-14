---
title: Renderers
---

### Introduction

Deft comes with the following 3 renderers.

| Name       | Description                     | Support Platforms           |
|------------|---------------------------------|-----------------------------|
| SoftBuffer | CPU rendering                   | Windows/MacOS/Linux         | 
| GL         | GPU rendering                   | Windows/MacOS/Linux/Android | 
| SoftGL     | CPU rendering, GPU presentation | Windows/MacOS/Linux/Android |

Usually, `GL` renderer has better performance, but consumes more memory, and `SoftGL` is suitable for scenarios where `SoftBuffer` is not supported but still want to use CPU rendering.

By default, Deft will automatically match a renderer based on the order in the table. If you want to change the default matching order, you can set it as follows.

1. Create a window and specify the `preferredRenderers` parameter, for example:
   ```javascript
    const window = new Window({
        // prioritize use GL renderers
        preferredRenderers: ["GL", "SoftBuffer"]
    });
   ```
2. Set the `DEFT_RENDERERS` environment variable, which will take effect for all Deft applications, for example:
   ```
   export DEFT_RENDERERS=GL,SoftBuffer
   ```