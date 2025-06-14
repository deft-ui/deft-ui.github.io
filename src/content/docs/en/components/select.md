---
title: Select
---

Select Component for single choice

**Usage**

```javascript
import {Select} from 'deft-react';
function App() {
    const options = [
        {label: "Rust", value: "rust"},
        {label: "JavaScript", value: "javascript"},
    ]
    return <Select options={options} />
}
```

**Properties**

| Property    | Description       | Type           | Default |
|-------------|-------------------|----------------|---------|
| value       | Current value     | string         | -       |
| options     | Selection options | SelectOption[] | -       |
| placeholder | Placeholder text  | string         | -       |
| disabled    | Whether disabled  | boolean        | false   |


**Events**

| Event  | Description             | Event Type |
|--------|-------------------------|------------|
| change | Selection state changed | -          |