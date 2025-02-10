---
title: '环境准备'
date: '2022-08-18'
---

## 平台依赖
**Linux**

  这里仅以Debian12为例，其他Linux系统根据包管理工具的不同，安装命令和需要安装的包可能稍有不同。
  ```
  sudo apt install build-essential libssl-dev libclang-dev libc++-dev
  sudo apt install xorg-dev libxcb-xfixes0-dev libxcb-shape0-dev
  sudo apt install libasound2-dev
  ```
**MacOS**

  1. Xcode

     请前往Apple官网下载最新的[Xcode](https://apps.apple.com/gb/app/xcode/id497799835?mt=12) ,根据提示完成安装。

  2. Clang14+

     Xcode自带Clang，请使用`clang --version`检查Clang版本，确保clang版本不低于14

**Windows**

  1. Git

     前往 https://git-scm.com/ 下载安装。

  2. Clang14+
  
     前往 https://github.com/llvm/llvm-project/releases/tag/llvmorg-18.1.8 下载

     如果下载的是手动安装版本，需要手动设置`LIBCLANG_PATH`环境变量指向llvm的`bin`目录。

  3. Visual C++ Build Tool 

     可以先不安装，安装Rust时，选择安装`Visual Studio Community`即可。

## 安装Rust

**Linux/MacOS**

  以下命令**无需**使用root权限执行
  ```
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
  更多安装方法请参考：https://www.rust-lang.org/zh-CN/learn/get-started

**Windows**

  下载[rustup-init.exe](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe) , 根据提示安装即可，如果系统还没有安装Visual Studio，安装向导里需要选择安装`Visual Studio Community`。

## 安装NodeJS

* Debian
  ```
  sudo apt update
  sudo apt install nodejs
  ```
* 其他平台

  前往[NodeJS官网](https://nodejs.org/)下载最新的Node安装包，根据提示安装即可。
  
  
## Android环境配置

如果你的应用不需要适配Android系统，可以直接跳过这部分。

**安装NDK**

1. 前往Android官网，下载安装[AndroidStudio](https://developer.android.com/studio)

2. 使用Android Studio里的`SDK Manager`安装如下组件。

   * Android SDK Platform
   * Android SDK Platform-Tools
   * NDK (Side by side)
   * Android SDK Build-Tools
   * Android SDK Command-line Tools

**安装Cargo-NDK**

```
cargo install cargo-ndk
rustup target add aarch64-linux-android
```

**环境变量配置**

**Linux**

```
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/$(ls -1 $ANDROID_HOME/ndk)"
export ANDROID_NDK=$ANDROID_NDK_HOME
export PATH=$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin:$PATH
export CARGO_NDK_SYSROOT_LIBS_PATH=$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/lib/aarch64-linux-android/
```

**MacOS**

```
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/$(ls -1 $ANDROID_HOME/ndk)"
export ANDROID_NDK=$ANDROID_NDK_HOME
export PATH=$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin:$PATH
export CARGO_NDK_SYSROOT_LIBS_PATH=$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/sysroot/usr/lib/aarch64-linux-android/
```

**Windows**

```
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LocalAppData\Android\Sdk", "User")
$VERSION = Get-ChildItem -Name "$env:LocalAppData\Android\Sdk\ndk"
[System.Environment]::SetEnvironmentVariable("ANDROID_NDK_HOME", "$env:LocalAppData\Android\Sdk\ndk\$VERSION", "User")
// TODO Set PATH & CARGO_NDK_SYSROOT_LIBS_PATH env
```