---
title: 复选框 Checkbox
---

复选框用于多项选择

**使用**

```javascript
import {Checkbox} from 'deft-react';

function App() {
    const javascriptRef = useRef();
    const rustRef = useRef();

    function onCheckChange(e) {
        console.log('is javascript checked', javascriptRef.current.value);
        console.log('is rust checked', rustRef.current.value);
    }

    return <Container>
        <Checkbox ref={javascriptRef} label="JavaScript" onChange={onCheckChange}/>
        <Checkbox ref={rustRef} label="Rust" onChange={onCheckChange}/>
    </Container>
}
```

**属性**

| 属性       | 说明   | 类型      | 默认值   |
|----------|------|---------|-------|
| label    | 标签   | string  | -     |
| checked  | 是否勾选 | boolean | -     |
| disabled | 是否禁用 | boolean | false |


**事件**

| 事件      | 说明       | 事件类型               |
|---------|----------|--------------------|
| change  | 勾选状态发生变化 |                    |