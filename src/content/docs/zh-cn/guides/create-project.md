---
title: 创建第一个工程
---

## 创建工程

安装Rust和NodeJS环境后，使用下面任意一条命令，即可创建一个Deft工程。

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

## 启动工程

```bash
npm run dev
```

执行上面命令后，按`r`启动本地预览，按`a`启动Android预览（需连接Android手机，且已打开USB调试或无线调试）

_注意：预览构建过程会自动连接Github下载Skia二进制库，请保持网络畅通。_

## 热加载

使用上面命令创建的工程支持前端（JavaScript）热加载，可实时预览前端修改。后端（Rust）修改需重启App(在`npm run dev`命令下按`a`或`r`键重新启动App).