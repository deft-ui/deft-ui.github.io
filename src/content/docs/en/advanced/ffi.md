---
title: Cross-Language Call
---

## JavaScript Call Rust

1. Declare a Rust function

   Sync function
   ```rust
   #[deft_macros::js_func]
   pub fn hello(message: String) -> String {
       println("value from js: ", message);
       "Hi, I am Rust".to_string()
   }
   ```
   Async function
   ```rust
   #[deft_macros::js_func]
   pub async fn hello_async(message: String) -> String {
       println("value from js: ", message);
       "Hi, I am Rust".to_string()
   }
   ```
2. Register Rust functions to JavaScript engine
   ```rust
   impl IApp for YourApp {
      fn init_js_engine(&mut self, js_engine: &mut JsEngine) {
         js_engine.add_global_func(hello::new());
         js_engine.add_global_func(hello_async::new());
      }
      ...
   }   
   ```
3. JavaScript调用
   ```javascript
   // Call sync function
   const value = hello("Hello, I am JavaScript");
   console.log('value from rust', value);
   
   // Call async function
   const value = await hello_async("Hello, I am JavaScript");
   console.log('value from rust', value);
   ```

## Rust Call JavaScript

**Rust global execute JavaScript code**

```rust
let mut js_engine = JsEngine::get();
js_engine.eval_module("console.log(111)", "test.js");
```

**Rust call JavaScript function**
JavaScript call Rust, and pass a JavaScript function as a parameter to Rust, at this time, Rust can use `call_as_function` to call the JavaScript function.
```rust
#[deft_macros::js_func]
pub fn my_rust_fn(callback: JsValue) {
    // callback is a function object passed from JavaScript
    // execute JavaScript callback
    callback.call_as_function(vec![JsValue::Bool(true)]);   
}
```




