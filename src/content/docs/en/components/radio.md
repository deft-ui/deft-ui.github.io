---
title: Radio
---

Radio Component for single choice

**Usage**

```javascript
import {Radio, RadioGroup} from 'deft-react';
function App() {
    return <RadioGroup>
        <Radio label="JavaScript" />
        <Radio label="Rust" />
    </RadioGroup>
}
```

**Properties**

| Property | Description      | Type       | Default |
|------------|------------------|------------|---------|
| label      | Option content   | string     | -       |
| checked    | Whether selected | boolean    | -       |
| disabled   | Whether disabled | boolean    | false   |


**Events**

| Event   | Description             | Event Type |
|--------|-------------------------|------------|
| change | Selection state changed | -          |