---
title:  Process
---
Process used to control process, get environment information, etc.

**Exit current process**

```javascript
process.exit(0);
```

**Get command line arguments**

```javascript
const argv = process.argv;
```

**Determine whether it is a mobile platform**

```javascript
const isMobile = process.isMobilePlatform;
```

**Catch unhandled promise rejection**

```javascript
process.setPromiseRejectionTracker((e) => {
    console.log("promise rejection", e);
});
```
