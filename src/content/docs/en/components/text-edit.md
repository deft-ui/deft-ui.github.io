---
title: TextEdit
---

TextEdit Component for entering multi-line text content

**Usage**

```javascript
import {TextEdit} from 'deft-react';
function App() {
    return <TextEdit text="Hello" />
}
```

**Properties**

| Property  | Description               | Type                 | Default |
|-------------|---------------------------|----------------------|---------|
| text        | text content              | string               | -       |
| placeholder | placeholder of Input      | string               | -       |
| disabled    | whether Input is disabled | boolean              | false   |


**Events**

| Event        | Description                          | Event Type |
|-------------|--------------------------------------|------------|
| textchange  | triggers when the Input value change | -          |
| caretchange | the cursor changes                   | -          |