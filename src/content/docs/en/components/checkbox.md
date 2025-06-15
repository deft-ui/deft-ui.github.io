---
title: Checkbox
---

Checkbox Component for multi-selection

**Usage**

```javascript
import {Checkbox} from 'deft-react';

function App() {
    const javascriptRef = useRef();
    const rustRef = useRef();

    function onCheckChange(e) {
        console.log('is javascript checked', javascriptRef.current.value);
        console.log('is rust checked', rustRef.current.value);
    }

    return <Container>
        <Checkbox ref={javascriptRef} label="JavaScript" onChange={onCheckChange}/>
        <Checkbox ref={rustRef} label="Rust" onChange={onCheckChange}/>
    </Container>
}
```

**Properties**

| Property | Description      | Type    | Default |
|----------|------------------|---------|---------|
| label    | Option text      | string  | -       |
| checked  | Whether selected | boolean | -       |
| disabled | Whether disabled | boolean | false   |


**Events**

| Event  | Description             | Event Type |
|--------|-------------------------|------------|
| change | Selection state changed | -          |