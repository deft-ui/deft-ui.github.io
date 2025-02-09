---
title: 段落 Paragraph
---

段落用于显示多格式的文本内容

**使用**

```
import {Paragraph} from 'deft-react';
function App() {
return <Paragraph />
}
```

**属性**

| 属性            | 说明     | 类型     | 默认值 |
|---------------|--------|--------|-----|
| selectionText | 当前选中文字 | string | -   |

**方法**

| 方法          | 说明       | 返回值类型 |
|-------------|----------|-------|
| addLine     | 追加一行     | -     |
| insertLine  | 指定位置插入一行 | -     |
| deleteLine  | 删除指定行    | -     |
| updateLine  | 更新指定行    | -     |
| clear       | 清空文本     | -     |
| measureLine | 测量指定文本尺寸 | -     |