---
title: RichText
---

RichText Component for displaying text with custom formats

**Usage**

```javascript
import {RichText} from 'deft-react';
function App() {
    const richTextRef = useRef();
    useEffect(() => {
        richTextRef.current.addLine([
            {
                type: "text",
                text: "R",
                color: "#F00",
                weight: 'bold',
            },
            {
                type: "text",
                text: "ich",
                weight: 'bold',
            },
            {
                type: "text",
                text: "T",
                color: "#F00",
                style: 'italic',
            },
            {
                type: "text",
                text: "ext",
                style: 'italic',
            }
        ]);
    }, []);
    
    return <RichText ref={richTextRef} />
}
```

**Properties**


**Methods**

| Method      | Description                          | Return Type |
|-------------|--------------------------------------|-------------|
| addLine     | Append a line                        | -           |
| insertLine  | Insert a line at specified position  | -           |
| deleteLine  | Delete specified line                | -           |
| updateLine  | Update specified line                | -           |
| clear       | Clear all text                       | -           |
| measureLine | Measure dimensions of specified text | -           |