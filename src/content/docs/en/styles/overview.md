---
title: Overview
---

Deft supports setting element styles using inline and CSS selectors.

## Import CSS stylesheets

**Native way**
```javascript
const css = `
.btn {
    color: #F00;   
}
`
navigator.stylesheet.append(css);
```

**Webpack**

Using `deft-style-loader` can implement the import and hot loading of css, similar to `style-loader`.


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

## Inline styles

Deft also supports setting element styles using inline CSS, which uses flex layout by default. The property names use camel case. For example, to set a centered layout:

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

## Inheritance

Styles support inheritance, for example, if a certain element sets the `color` property, the child element will inherit the `color` computed value if it does not set the `color` property.

## Box model

The box model of Deft is based on the `border-box` model of Web CSS. Margin defines the margin of the element, padding defines the padding of the element, border defines the border of the element, and border-radius defines the rounded border. The width and height include padding and border.

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