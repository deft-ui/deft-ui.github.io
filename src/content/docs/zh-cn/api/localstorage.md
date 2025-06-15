---
title: LocalStorage 本地储存
---

LocalStorage用于储存少量的键值数据。

LocalStorage默认是禁用的，如果需要启用，需要在初始化JS引擎的时候，手动开启，并指定数据储存目录。

**手动开启localstroage**
```rust
impl IApp for AppImpl {
    ...
    fn init_js_engine(&mut self, _js_engine: &mut JsEngine) {
        // 启用localstorage, 数据将保存于指定的dir目录下
        let dir = env::current_exe().unwrap().parent().unwrap().join("localstorage");
        js_engine.enable_localstorage(dir);
    }
}
```

**使用**

```javascript
// 保存数据
localStorage.setItem("name", "测试");
// 读取数据
const value = localStorage.getItem("name");
```