---
title: 输入框 Entry
---

输入框用于输入文本内容

**使用**

```
import {Entry} from 'deft-react';
function App() {
    return <Entry text="Hello" />
}
```

**属性**

| 属性           | 说明     | 类型                   | 默认值   |
|--------------|--------|----------------------|-------|
| align        | 对齐方式   | 枚举：left,right,center | left  |
| text         | 文本     | string               | -     |
| multipleLine | 是否多行输入 | boolean              | false |
| autoHeight   | 是否自动高度 | boolean              | false |
| rows         | (高度）行数 | number               | -     |


**事件**

| 事件         | 说明     | 事件类型               |
|------------|--------|--------------------|
| textchange | 文本发生变化 |                    |