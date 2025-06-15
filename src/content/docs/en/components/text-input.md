---
title: TextInput
---

TextInput Component for entering single-line text content

**Usage**

```javascript
import {TextInput} from 'deft-react';
function App() {
    return <TextInput text="Hello" />
}
```

**Properties**

| Property    | Description               | Type                 | Default |
|-------------|---------------------------|----------------------|---------|
| text        | Text content              | string               | -       |
| placeholder | Placeholder of Input      | string               | -       |
| type        | Type of input             | "text" \| "password" | "text"  |
| disabled    | Whether Input is disabled | boolean              | false   |


**Events**

| Event       | Description                          | Event Type |
|-------------|--------------------------------------|------------|
| textchange  | Triggers when the Input value change | -          |
| caretchange | The cursor changes                   | -          |