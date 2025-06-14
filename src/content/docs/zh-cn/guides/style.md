---
title: 样式
---

Deft支持内联和CSS选择器设置元素的样式。

## 导入CSS样式表

原生方式
```javascript
const css = `
.btn {
    color: #F00;   
}
`
navigator.stylesheet.append(css);
```

Webpack

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

Deft也可以通过CSS内联的方式设置元素的样式，默认采用`flex`布局，属性名使用小驼峰规则命名。比如设置居中布局：

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

Deft的盒子模型采用的是Web CSS的`border-box`模型，通过margin定义元素的外边距，`padding`定义元素的内边距，`border`定义元素边框，`border-radius`定义圆角边框，宽高包含内边距和边框。

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

## 布局方式 display

通过display属性定义元素的布局方式，支持以下取值：

**flex**(默认) flex布局

**none** 不显示

##  主轴方向 flex-direction

flex-direction定义主轴的方向，支持以下取值：

**column**(默认值) 主轴为垂直方向，起点在上沿

**column-reverse** 主轴为垂直方向，起点在下沿

**row**  主轴为水平方向，起点在左端

**row-reverse** 主轴为水平方向，起点在右端

_注意：和Web不同，`flex-direction`默认值为`column`，而不是`row`_

## 主轴对齐 justify-content

`justify-content`定义元素在主轴的对齐方式。支持以下取值：

**flex-start**(默认) 左对齐

**center** 居中对齐

**flex-end** 右对齐

**space-between** 两端对齐，元素之间的间隔都相等

**space-around** 每个元素两侧的间隔相等

**space-evenly**

## 交叉轴对齐 align-items

`align-items` 定义元素在交叉轴上如何对齐，支持以下取值：

**auto** 自动

**flex-start** 交叉轴的起点对齐

**center** 交叉轴的中点对齐

**flex-end** 交叉轴的终点对齐

**stretch** 占满整个容器高度

**baseline** 元素的第一行文字的基线对齐

**space-between** 

**space-around**


## flex-grow

`flex-grow` 定义元素的放大比例，默认为0，即如果存在剩余空间，也不放大。

## flex-shrink

`flex-shrink` 定义了元素的缩小比例，默认为1，即如果空间不足，该元素将缩小。

## flex-basis

`flex-basis` 定义了在分配多余空间之前，元素占据的主轴空间,默认为元素原本大小。

## 定位 position

支持`static`,`relative`和`absolute`等定位方式，默认为`static`。

## 文字样式

文字样式通过以下属性定义：

**color** 文本颜色

**font-size** 文本字体大小

**line-height** 文本行高

_注意：由于样式的继承性，设置文本样式将会影响其子元素的文本样式_

## 背景色 background-color

`background-color` 定义元素背景色，目前仅支持单一颜色。
 
**示例**
```jsx
<Container style={{
    backgroundColor: '#0006'
}}>...</Container>
```

## 变换 transform

`transform`允许你旋转、缩放、倾斜或平移指定元素。

支持以下方法：

**rotate** 旋转元素

**translate** 平移元素

**scale** 缩放元素

**示例**
```jsx
// 顺时针旋转45度
<Container style={{
    transform: 'rotate(45deg)',
}}>...</Container>
```
