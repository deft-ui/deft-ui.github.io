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

| Property  | Description               | Type                 | Default |
|-------------|---------------------------|----------------------|---------|
| text        | text content              | string               | -       |
| placeholder | placeholder of Input      | string               | -       |
| type        | type of input             | "text" \| "password" | "text"  |
| disabled    | whether Input is disabled | boolean              | false   |


**Events**

| Event        | Description                          | Event Type |
|-------------|--------------------------------------|------------|
| textchange  | triggers when the Input value change | -          |
| caretchange | the cursor changes                   | -          |