---
title: Create First Project
---

## Create Project

After installing the Rust and NodeJS environments, then use any of the following commands to create a Deft project.

**Npm**
```bash
npm create deft@latest
```
**Pnpm**
```bash
pnpm create deft@latest
```
**Yarn**
```bash
yarn create deft
```

## Start Project

```bash
npm run dev
```

Running the above command will start a local preview, press `r` to start the local preview, press `a` to start the Android preview (requires a connected Android phone and enables USB debugging or wireless debugging).

_Note: The preview build process will automatically connect to Github to download the Skia binary library, please keep the network connected._

## Hot Reload

Use the above command to create an engine that supports hot reloading of the front-end (JavaScript), which can preview the front-end modifications in real time. Back-end (Rust) modifications need to restart the App (press `a` or `r` to restart the App in the `npm run dev` command).