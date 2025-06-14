---
title: LocalStorage
---

LocalStorage used to store small amounts of key-value data.

LocalStorage default is disabled, if you need to enable it, you need to manually enable it when initializing the JS engine and specify the data storage directory.

**Manually enable localstorage**
```rust
impl IApp for AppImpl {
    ...
    fn init_js_engine(&mut self, _js_engine: &mut JsEngine) {
        // Enable localstorage, the data will be saved in the specified dir directory.
        let dir = env::current_exe().unwrap().parent().unwrap().join("localstorage");
        js_engine.enable_localstorage(dir);
    }
}
```

**Usage**

```javascript
// Store data
localStorage.setItem("name", "测试");
// Read data
const value = localStorage.getItem("name");
```