---
title: 'Optional Features'
---

To control the size of the application binary package, Deft provides some features as optional features. Currently, the following optional features are supported:

| Feature        | Enbaled by Default | Functionality            |
|-----------|------|---------------|
| gl        | Yes    | GPU rendering (must be enbaled for mobile devices) |
| http      | Yes    | HTTP network requests      |
| websocket | Yes    | WebSocket requests   |
| tray      | Yes    | System status bar icon       |
| audio     | No    | Audio playback (not yet supported on HarmonyOS)   |
| clipboard | No    | Clipboard           |
| dialog    | No    | Dialog boxes (PC-only support)    |
| sqlite    | No    | SQLite database read/write   |

## Configure Optional Features

Optional features are configured in the `Cargo.toml` file, which is located in the project root directory.

If you want to disable the default features, you need to set `default-features` to false and set `features` to the features you want to enable.

For example, if you only want to enable the `http` and `websocket` features, you need to modify the deft dependency to the following:

```toml
[dependencies]
deft = { version = "0.7.1", default-features = false, features = ["http", "websocket"] }
```

For more feature usage, please refer to the [rust official documentation](https://doc.rust-lang.org/cargo/reference/features.html).
