---
title: 概述
---

Deft支持内联和CSS选择器设置元素的样式。

## 导入CSS样式表

**原生方式**
```javascript
const css = `
.btn {
    color: #F00;   
}
`
navigator.stylesheet.append(css);
```

**Webpack**

通过`deft-style-loader`可以实现css的导入和热加载，使用方法类似于`style-loader`。

配置示例：

```
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.css$/,
                use: [ 'deft-style-loader', 'css-loader', 'postcss-loader']
            }
        ],
    }
};
```

## 内联样式

Deft也可以通过CSS内联的方式设置元素的样式，默认采用flex布局，属性名使用小驼峰规则命名。比如设置居中布局：

```jsx
<Container
  style={{
    justifyContent: 'center',
    alignItems: 'center',  
  }}
>
  Some contents
</Container>
```

## 继承

样式支持继承，比如某个元素设置了`color`属性，其子元素在不设置`color`属性的情况下，将继承父元素的`color`计算值。

## 盒子模型

Deft的盒子模型采用的是Web CSS的`border-box`模型，通过margin定义元素的外边距，padding定义元素的内边距，border定义元素边框，border-radius定义圆角边框，宽高包含内边距和边框。

**使用示例**
```jsx
<Container style={{
    width: 100,
    height: 100,
    margin: 10,
    padding: 10,
    border: '1 #ccc',
    borderRadius: 5,
}}>...</Container>
```