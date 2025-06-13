---
title: 架构
---

# 简介

Deft是一个通用的UI引擎，允许使用Rust和JavaScript构建跨平台应用。它使用统一的渲染引擎(skia)和JavaScript引擎(quickjs)，确保在所有平台都拥有一致的表现。
Deft is a cross-platform UI engine that allows you to build applications using Rust and JavaScript. It uses a unified rendering engine (skia) and JavaScript engine (quickjs) to ensure consistent performance on all platforms.

Deft提供常用的基础组件，同时允许创建自绘组件，这提供了极大的灵活性。基础组件和自绘组件使用Rust编写，以提供更好的性能。

Deft提供便捷高效的跨语言调用（Rust和JavaScript），可以高效地调用系统接口。

# Deft不是什么

* 不是WebView。Deft不提供完整Web环境，即使它提供很多跟Web一致的API。
* 不是一个大而全的UI框架。Deft更多的是提供基础能力，同时提供易用的扩展机制，以保持轻量和灵活。
* 不是高性能JavaScript引擎。Deft使用QuickJS解析执行JavaScript，性能并不是QuickJS的优势，性能问题应该使用Rust解决。

# 主要组件

## deft [Rust]

Rust层使用的主要依赖库，提供应用初始化、启动、运行时、基础组件等能力。

## deft-build [Rust]

Rust层使用的构建脚本依赖，提供开发和构建相关能力。

## deft-macros [Rust]

Rust使用的宏工具包，提供方便的跨语言调用能力。

## deft-sys [JS]

JS层类型定义库，它不是必须的，当你希望IDE提供类型提示的时候，才需要使用它。

## deft-react [JS]

JS层React支持库，它不是必须的，当你希望使用React开发应用时，才需要使用它。

# 外部组件

## deft-skia-safe

提供2D图形渲染相关能力，从[rust-skia](https://github.com/rust-skia/rust-skia)项目fork出来的，以更好适配Deft

## deft-quick-js

提供JS解析、执行相关能力，从[quick-js](https://github.com/theduke/quickjs-rs)项目fork出来的，以更好适配Deft

## deft-winit

提供窗口创建、管理相关能力，从[winit](https://github.com/rust-windowing/winit)项目fork出来的，以更好适配Deft

## deft-yoga

提供布局计算相关能力，从[yoga-rs](https://github.com/bschwind/yoga-rs)项目fork出来的，以更好适配Deft

