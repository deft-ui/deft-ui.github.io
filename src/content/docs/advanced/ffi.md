---
title: 跨语言调用
---

## JavaScript调用Rust

1. 声明Rust函数
   ```rust
   #[deft_macros::js_func]
   pub fn hello(message: String) -> String {
       println("value from js: ", message);
       "Hi, I am Rust".to_string()
   }
   ```
2. 向JavaScript引擎注册Rust函数
   ```rust
   impl IApp for YourApp {
      fn init_js_engine(&mut self, js_engine: &mut JsEngine) {
         js_engine.add_global_func(hello::new());
      }
      ...
   }   
   ```
3. JavaScript调用
   ```javascript
   const value = hello("Hello, I am JavaScript");
   console.log('value from rust', value);
   ```

## Rust调用JavaScript

**Rust全局执行JavaScript代码**

```rust
let mut js_engine = JsEngine::get();
js_engine.eval_module("console.log(111)", "test.js");
```

**Rust回调JavaScript函数**
JavaScript调用Rust的时候，可以把JavaScript函数作为参数传递给Rust, 此时，Rust便可以使用`call_as_function`回调JavaScript.
```rust
#[deft_macros::js_func]
pub fn my_rust_fn(callback: JsValue) {
    // callback为JavaScript传递过来的一个function对象
    // 执行JavaScript回调
    callback.call_as_function(vec![JsValue::Bool(true)]);   
}
```




