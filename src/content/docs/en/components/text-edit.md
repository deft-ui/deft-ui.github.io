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

| Property    | Description               | Type                 | Default |
|-------------|---------------------------|----------------------|---------|
| text        | Text content              | string               | -       |
| placeholder | Placeholder of Input      | string               | -       |
| disabled    | Whether Input is disabled | boolean              | false   |


**Events**

| Event       | Description                          | Event Type |
|-------------|--------------------------------------|------------|
| textchange  | Triggers when the Input value change | -          |
| caretchange | The cursor changes                   | -          |