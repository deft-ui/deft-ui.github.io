---
title: '可选特性'
---

为了控制应用二进制包体积，Deft将部分功能模块以可选特性(feature)的方式提供，目前支持以下可选特性：

| 特性        | 默认开启 | 功能            |
|-----------|------|---------------|
| gl        | 是    | GPU渲染，移动端必须开启 |
| http      | 是    | Http网络请求      |
| websocket | 是    | WebSocket请求   |
| tray      | 是    | 系统状态栏图标       |
| audio     | 否    | 音频播放，暂不支持鸿蒙   |
| clipboard | 否    | 剪贴板           |
| dialog    | 否    | 对话框，仅支持PC端    |
| sqlite    | 否    | sqlite数据库读写   |

## 配置可选特性

可选特性通过修改`Cargo.toml`配置，该文件保存在项目根目录下。

如果需要关闭默认特性，则需要把`default-features`设置为false，然后把`features`设置为你想要启用的特性。

比如，如果你只想启用`http`,`websocket`特性，则需要将deft的依赖配置更改为如下：

```toml
[dependencies]
deft = { version = "0.7.1", default-features = false, features = ["http", "websocket"] }
```

更多feature用法，可参考[rust官方文档](https://doc.rust-lang.org/cargo/reference/features.html)。

