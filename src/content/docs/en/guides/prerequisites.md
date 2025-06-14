---
title: 'Environment Setup'
date: '2022-08-18'
---

## Platforms Dependencies
**Linux**

  This is only an example for Debian12, other Linux systems may have different commands and packages to install.

  ```
  sudo apt install build-essential libssl-dev libclang-dev libc++-dev \
       xorg-dev libxcb-xfixes0-dev libxcb-shape0-dev libdbus-1-dev \
       libasound2-dev libegl-dev libgles-dev librust-wayland-egl-dev
  ```
**MacOS**

  1. Xcode

     Please go to Apple's official webside to download the latest [Xcode](https://apps.apple.com/gb/app/xcode/id497799835?mt=12) and follow the prompts to complete the installation.

  2. Clang14+

     Xcode comes with Clang, please use `clang --version` to check the Clang version, and ensure the Clang version is not less than 14.

**Windows**

  1. Git

     Go to https://git-scm.com/ to download and install.

  2. Clang14+
  
     Go to https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.8 to download and install.

     If you download the manual installation version, you need to manually set the `LIBCLANG_PATH` environment variable to point to the `bin` directory of llvm.

  3. Visual C++ Build Tool 

     You can install it later, when installing Rust, select `Visual Studio Community`.

## Install Rust

**Linux/MacOS**

  The following command **does not** need to be executed with root permissions.
  ```
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
  For More installation methods, refer to: https://www.rust-lang.org/zh-CN/learn/get-started

**Windows**

  Download [rustup-init.exe](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe) and follow the prompts to install. If Visual Studio is not installed, you need to select `Visual Studio Community` during the installation.

## Install NodeJS

* Debian
  ```
  sudo apt update
  sudo apt install nodejs
  ```
* Other Platforms

  Go to the [NodeJS official webside] to download the latest Node installation package, and follow the prompts to install.