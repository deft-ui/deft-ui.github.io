---
title: Base Class
---

# Element

Element is the base class of all components, and the properties, methods, and events are inherited by all components.

**Properties**

| Property     | Description                        | type             | Default |
|--------------|------------------------------------|------------------|---------|
| id           | Element's unique device identifier | number           | -       |
| parent       | Parent element                     | Element          | -       |
| rootElement  | Root element                       | Element          | -       |
| window       | Owning window                      | Window           | -       |
| style        | Style                              | StyleProps       | -       |
| hoverStyle   | Hover style                        | StyleProps       | -       |
| scrollTop    | Vertical scroll position           | number           | 0       |
| scrollLeft   | Horizontal scroll position         | number           | 0       |
| draggable    | Is the element cocoa drag          | boolean          | false   |
| cursor       | Cursor                             | string           | default |
| size         | Element size                       | [number, number] | -       |
| contentSize  | Element content size               | [number, number] | -       |
| scrollHeight | Scroll bar height                  | number           | -       |
| scrollWidth  | Scroll bar width                   | number           | -       |
| autoFocus    | Whether to autofocus               | boolean          | false   |

**Methods**

| Methods               | Description           | Reture type |
|-----------------------|-----------------------|-------------|
| focus                 | Focus                 | void        |
| getBoundingClientRect | Get element rectangle | ElementRect |

**Events**

| Event        | Description                      | Event type         |
|--------------|----------------------------------|--------------------|
| boundschange | Element position or size change  | IBoundsChangeEvent |
| focus        | Gains focus                      | -                  |
| blur         | Loses focus                      | -                  |
| click        | Click                            | IMouseEvent        |
| contextmenu  | Context menu (right mouse click) | IMouseEvent        |
| mousedown    | Mouse button pressed             | IMouseEvent        |
| mouseup      | Mouse button released            | IMouseEvent        |
| mousemove    | Cursor moves                     | IMouseEvent        |
| mouseenter   | Cursor enters element            | IMouseEvent        |
| mouseleave   | Cursor leaves element            | IMouseEvent        |
| keydown      | Keyboard key pressed             | -                  |
| keyup        | Keyboard key released            | -                  |
| sizechanged  | Element size changed             | -                  |
| scroll       | Scrolling                        | -                  |
| mousewhell   | Mouse wheel scrolled             | -                  |
| dragstart    | Drag operation started           | -                  |
| dragover     | Dragged over drop target         | -                  |
| drop         | Drag operation completed         | -                  |
| touchstart   | Touch interaction started        | -                  |
| touchmove    | Touch moved                      | -                  |
| touchend     | Touch interaction ended          | -                  |
| touchcancel  | Touch interaction canceled       | -                  |