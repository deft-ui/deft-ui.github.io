---
title: Image
---

Image component used to display specified images, supporting PNG, JPEG, SVG, BMP, etc. formats.

**Usage**

```javascript
import {Image} from 'deft-react';
function App() {
    return <Image src="path/to/image.png" />
}
```

**Properties**

| Property | Description                                                                              | Type   | Default |
|------------|------------------------------------------------------------------------------------------|--------|---------|
| src        | Image address, which can be a local file path or an internal connection image (data url) | string | -       |