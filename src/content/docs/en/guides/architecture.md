---
title: Architecture
---

# Introduction

Deft is a cross-platform UI engine that allows you to build applications using Rust and JavaScript. It uses a unified rendering engine (skia) and JavaScript engine (quickjs) to ensure consistent performance on all platforms.

Deft provides a wide range of basic components, and allows you to create custom components, which provides great flexibility. Basic components and custom components are written in Rust to provide better performance.

Deft provides a convenient and efficient cross-language call (Rust and JavaScript), which can efficiently call system interfaces.

# What is not Deft

* Is not a WebView. Deft does not provide a complete Web environment, even though it provides many Web-like APIs.
* Is not a full UI framework. Deft provides basic capabilities and provides extensible mechanisms to keep it light and flexible.
* Is not a high-performance JavaScript engine. Deft uses QuickJS to parse and execute JavaScript, performance is not the advantage of QuickJS, performance issues should be solved using Rust.

# Main Components

## deft [Rust]

Rust layer uses the main dependency library, providing application initialization, startup, runtime, and basic components.

## deft-build [Rust]

Rust layer uses the build script dependency, providing development and build related capabilities.

## deft-macros [Rust]

Rust uses the macro tool package, providing convenient cross-language calling capabilities.

## deft-sys [JS]

JS layer type definition library, it is not required, only when you want to provide type hints in the IDE.

## deft-react [JS]

JS layer React support library, it is not required, only when you want to use React to develop applications.

# External Components

## deft-skia-safe

Provides 2D graphics rendering capabilities. Forked from the [rust-skia](https://github.com/rust-skia/rust-skia) project to better adapt to Deft.

## deft-quick-js

Provides JS parsing and execution capabilities. Forked from the [quick-js](https://github.com/theduke/quickjs-rs) project to better adapt to Deft.

## deft-winit

Provides window creation and management capabilities. Forked from the [winit](https://github.com/rust-windowing/winit) project to better adapt to Deft.

## deft-yoga

Provides layout calculation capabilities. Forked from the [yoga-rs](https://github.com/bschwind/yoga-rs) project to better adapt to Deft.

