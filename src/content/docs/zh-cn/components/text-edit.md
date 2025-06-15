---
title: 单行输入框 TextEdit
---

多行输入框用于输入多行文本内容

**使用**

```javascript
import {TextEdit} from 'deft-react';
function App() {
    return <TextEdit text="Hello" />
}
```

**属性**

| 属性          | 说明   | 类型                   | 默认值    |
|-------------|------|----------------------|--------|
| text        | 文本   | string               | -      |
| placeholder | 输入提示 | string               | -      |
| disabled    | 是否禁用 | boolean              | false  |


**事件**

| 事件          | 说明     | 事件类型               |
|-------------|--------|--------------------|
| textchange  | 文本发生变化 |                    |
| caretchange | 光标发生变化 |                    |