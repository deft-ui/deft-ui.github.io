---
title: 单选按钮 Radio
---

单选按钮用于单项选择

**使用**

```javascript
import {Radio, RadioGroup} from 'deft-react';
function App() {
    return <RadioGroup>
        <Radio label="JavaScript" />
        <Radio label="Rust" />
    </RadioGroup>
}
```

**属性**

| 属性       | 说明     | 类型         | 默认值   |
|----------|--------|------------|-------|
| label    | 选项文本   | string     | -     |
| checked  | 是否选中   | boolean    | -     |
| disabled | 是否禁用   | boolean    | false |


**事件**

| 事件      | 说明       | 事件类型               |
|---------|----------|--------------------|
| change  | 选中状态发生变化 |                    |