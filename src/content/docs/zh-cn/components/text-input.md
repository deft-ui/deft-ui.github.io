---
title: 单行输入框 TextInput
---

输入框用于输入单行文本内容

**使用**

```javascript
import {TextInput} from 'deft-react';
function App() {
    return <TextInput text="Hello" />
}
```

**属性**

| 属性          | 说明   | 类型                   | 默认值    |
|-------------|------|----------------------|--------|
| text        | 文本   | string               | -      |
| placeholder | 输入提示 | string               | -      |
| type        | 类型   | "text" \| "password" | "text" |
| disabled    | 是否禁用 | boolean              | false  |


**事件**

| 事件          | 说明     | 事件类型               |
|-------------|--------|--------------------|
| textchange  | 文本发生变化 |                    |
| caretchange | 光标发生变化 |                    |