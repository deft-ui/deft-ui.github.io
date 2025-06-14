---
title: Style
---

Deft supports inline and CSS selector to set element styles.

## Import CSS Stylesheets

Native way.
```javascript
const css = `
.btn {
    color: #F00;   
}
`
navigator.stylesheet.append(css);
```

Webpack

Use`deft-style-loader` to import and hot load css files, similar to `style-loader`.

Configuration example:

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

## Inline Styles

Deft also supports inline styles, which use flex layout by default, and property names use camel case. For example, to set a centered layout:

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

## Inherited Styles

Styles support inheritance, for example, if an element sets the `color` property, its sub-elements will inherit the `color` computed value without setting the `color` property.

## Box Model

Deft's box model is based on the `border-box` model of the Web CSS, with margin defining the element's margin, padding defining the element's padding, border defining the element's border, and border-radius defining the rounded border. The width and height include padding and border.


**Example**
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

## display

Use `display` to define the layout of the element, supporting the following values:

**flex**(default) flex layout

**none** no display

##  Main Axis Direction flex-direction

`flex-direction` defines the main axis direction, supporting the following values:

**column**(default) Mian axis is vertical, start point on the top

**column** Main axis is vertical, start point on the bottom

**row** Main axis is horizontal, start point on the left

**row-reverse** Main axis is horizontal, start point on the right

_Note: Unlike the web, the default value of `flex-direction` is column, not `row`_

## Main Axis Alignment: justify-content

`justify-content` defines the alignment of elements on the main axis. The following values are supported:

**flex-start**(default) Main axis start alignment.

**center** Main axis center alignment.

**flex-end** Main axis end alignment.

**span-between** Align left and right, the interval between the elements is equal.

**space-around** Each element is equally spaced on both sides.

**space-evenly**

## Cross-axis Alignment: align-items

`align-items` defines how elements are aligned on the cross axis, supporting the following values:

**auto** 

**flex-start** Cross-axis start alignment

**center** Cross-axis center alignment

**flex-end** Cross-axis end alignment

**stretch** Stretch to fill the entire container height

**baseline** Align the baseline of the first line of text

**space-between** 

**space-around**


## flex-grow

`flex-grow` defines the element's growth ratio, with a default value of 0, if there is remaining space, it will not be enlarged.

## flex-shrink

`flex-shrink` defines the element's shrink ratio, with a default value of 1, if there is not enough space, the element will shrink.

## flex-basis

`flex-basis` defines the size of the element before extra space is allocated, with a default value of the element's original size.

## position

Supports `static`, `relative` and `absolute` positioning methods, with a default value of `static`.

## Text Styles

Text styles are defined through the following properties:

**color** Text color

**font-size** Text font size

**line-height** Text line height

_Note: Due to the inheritance of styles, setting text styles will affect the text styles of sub-elements_

## background-color

`background-color` defines the background color of the element, currently only supports a single color.
 
**Example**
```jsx
<Container style={{
    backgroundColor: '#0006'
}}>...</Container>
```

## transform

`transform` allows you to rotate, scale, skew or translate the specified element.

Supported methods:

**rotate** Rotates the element.

**translate** Translates the element.

**scale** Scales the element.

**Example**
```jsx
// 顺时针旋转45度
<Container style={{
    transform: 'rotate(45deg)',
}}>...</Container>
```
