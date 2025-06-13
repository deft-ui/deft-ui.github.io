---
title: 富文本 RichText
---

富文本用于显示带自定义格式的文本内容

**使用**

```javascript
import {RichText} from 'deft-react';
function App() {
    const richTextRef = useRef();
    useEffect(() => {
        richTextRef.current.addLine([
            {
                type: "text",
                text: "R",
                color: "#F00",
                weight: 'bold',
            },
            {
                type: "text",
                text: "ich",
                weight: 'bold',
            },
            {
                type: "text",
                text: "T",
                color: "#F00",
                style: 'italic',
            },
            {
                type: "text",
                text: "ext",
                style: 'italic',
            }
        ]);
    }, []);
    
    return <RichText ref={richTextRef} />
}
```

**属性**


**方法**

| 方法          | 说明       | 返回值类型 |
|-------------|----------|-------|
| addLine     | 追加一行     | -     |
| insertLine  | 指定位置插入一行 | -     |
| deleteLine  | 删除指定行    | -     |
| updateLine  | 更新指定行    | -     |
| clear       | 清空文本     | -     |
| measureLine | 测量指定文本尺寸 | -     |