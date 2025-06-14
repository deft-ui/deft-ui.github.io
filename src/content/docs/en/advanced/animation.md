---
title: Animation
---

## Introduction

Deft supports animation, similar to CSS animations.

## Define Animation

Unlike the @keyframes in Web, in Deft, you need to define the animation by `animation_create`, currently only the `transform` property is supported.

**Example**

```javascript
// Create a rotate animation, the animation name is my-rotate
animation_create("my-rotate", {
    // Start frame
    "0": {
        transform: 'rotate(0deg)'
    },
    // end frame
    "1": {
        transform: 'rotate(360deg)'
    }
});
```

_Note: The animation name should be unique_

## 应用动画
## Apply Animation

Like Web CSS animations, Deft applies animations through css, supporting the following CSS properties:

**animation-name** Animation name, defined by `animation_create` function

**animation-duration** Animation duration, in milliseconds

**animation-iteration-count** Animation loop count, default is 1


**Example**

```jsx
<Button style={{
    animationName: 'my-rotate',
    animationDuration: 2000,
}}>MyButton</Button>
```