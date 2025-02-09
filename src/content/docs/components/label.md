---
title: 文字标签 Label
---

文字标签用于显示单一格式的文本内容

**使用**

```
import {Label} from 'deft-react';
function App() {
    return <Label text="Hello" />
}
```

**属性**

| 属性       | 说明     | 类型                   | 默认值   |
|----------|--------|----------------------|-------|
| textWrap | 是否自动换行 | boolean              | false |
| text     | 文本内容   | string               | -     |
| align    | 对齐方式   | 枚举：left,right,center | left  |