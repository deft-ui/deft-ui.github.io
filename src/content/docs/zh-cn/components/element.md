---
title: 基类
---

# 元素 Element

元素是所有组件的基类，元素的属性、方法和事件被所有组件继承。

**属性**

| 属性           | 说明         | 类型               | 默认值     |
|--------------|------------|------------------|---------|
| id           | 一个元素的唯一标识符 | number           | -       |
| parent       | 父元素        | Element          | -       |
| rootElement  | 根元素        | Element          | -       |
| window       | 所属窗体       | Window           | -       |
| style        | 样式         | StyleProps       | -       |
| hoverStyle   | 悬停样式       | StyleProps       | -       |
| scrollTop    | 垂直活动条位置    | number           | 0       |
| scrollLeft   | 水平滚动条位置    | number           | 0       |
| draggable    | 是否可可拖拽     | boolean          | false   |
| cursor       | 光标         | string           | default |
| size         | 大小         | [number, number] | -       |
| contentSize  | 内容大小       | [number, number] | -       |
| scrollHeight | 滚动条高度      | number           | -       |
| scrollWidth  | 滚动条宽度      | number           | -       |
| autoFocus    | 自动聚焦       | boolean          | false   |

**方法**

| 方法                    | 说明     | 返回值类型       |
|-----------------------|--------|-------------|
| focus                 | 聚焦     | void        |
| getBoundingClientRect | 获取元素矩形 | ElementRect |

**事件**

| 事件           | 说明          | 事件类型               |
|--------------|-------------|--------------------|
| boundschange | 元素位置或大小发生改变 | IBoundsChangeEvent |
| focus        | 得到输入焦点      | -                  |
| blur         | 失去焦点        | -                  |
| click        | 点击          | IMouseEvent        |
| contextmenu  | 上下文菜单（鼠标右键） | IMouseEvent        |
| mousedown    | 按下鼠标按钮      | IMouseEvent        |
| mouseup      | 松开鼠标按钮      | IMouseEvent        |
| mousemove    | 光标移动        | IMouseEvent        |
| mouseenter   | 光标进入        | IMouseEvent        |
| mouseleave   | 光标离开        | IMouseEvent        |
| keydown      | 按下键盘按键      | -                  |
| keyup        | 松开键盘按键      | -                  |
| sizechanged  | 元素尺寸发生改变    | -                  |
| scroll       | 滚动          | -                  |
| mousewhell   | 滚动鼠标滚轮      | -                  |
| dragstart    | 拖拽开始        | -                  |
| dragover     | 拖拽放置        | -                  |
| drop         | 拖拽结束        | -                  |
| touchstart   | 触摸操作开始      | -                  |
| touchmove    | 触摸移动        | -                  |
| touchend     | 触摸操作结束      | -                  |
| touchcancel  | 触摸操作取消      | -                  |