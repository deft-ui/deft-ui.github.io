---
title: 下拉框 Select
---

下拉框用于下拉单项选择

**使用**

```javascript
import {Select} from 'deft-react';
function App() {
    const options = [
        {label: "Rust", value: "rust"},
        {label: "JavaScript", value: "javascript"},
    ]
    return <Select options={options} />
}
```

**属性**

| 属性          | 说明   | 类型             | 默认值   |
|-------------|------|----------------|-------|
| value       | 当前值  | string         | -     |
| options     | 选项   | SelectOption[] | -     |
| placeholder | 提示   | string         | -     |
| disabled    | 是否禁用 | boolean        | false |


**事件**

| 事件      | 说明       | 事件类型               |
|---------|----------|--------------------|
| change  | 选项状态发生变化 |                    |