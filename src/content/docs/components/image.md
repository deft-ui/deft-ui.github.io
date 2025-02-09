---
title: 图片 Image
---

图片组件用户显示指定图片，支持PNG,JPEG,SVG,BMP等格式。

**使用**

```
import {Image} from 'deft-react';
function App() {
    return <Image src="path/to/image.png" />
}
```

**属性**

| 属性  | 说明                       | 类型     | 默认值 |
|-----|--------------------------|--------|-----|
| src | 图片地址，可以是本地文件路径，也可以使用内联图片 | string | -   |