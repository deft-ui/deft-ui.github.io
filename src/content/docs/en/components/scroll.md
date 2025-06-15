---
title: 滚动容器 Scroll
---

可滚动容器用于展示大尺寸数据。

**使用**

```
import {Scroll} from 'deft-react';
function App() {
    return <Scroll>
        Some contents
    </Scroll>
}
```

**属性**

| 属性      | 说明      | 类型                   | 默认值  |
|---------|---------|----------------------|------|
| scrollX | 水平滚动条设置 | 枚举：auto,always,never | auto |
| scrollY | 垂直滚动条设置 | 枚举：auto,always,never | auto |

**方法**

| 方法       | 说明     | 返回值类型       |
|----------|--------|-------------|
| scrollBy | 滚动指定距离 |             |