---
title: 快速开始
---

### 环境准备

请确认[Deft基础环境](/guides/prerequisites)已经配置。

**安装NDK**

1. 前往Android官网，下载安装[Android Studio](https://developer.android.com/studio)

2. 使用Android Studio里的`SDK Manager`安装如下组件。

    * Android SDK Platform
    * Android SDK Platform-Tools
    * NDK 26 (Side by side)
    * Android SDK Build-Tools
    * Android SDK Command-line Tools

**安装JRE 17**

**方法1**

前往[Java官网](https://www.java.com/)下载安装，也可安装其他厂商提供的JRE/JDK。

**方法2:** 

使用Android Studio自带的JRE，直接把`AndroidStudio安装目录/jbr/bin`追加到`PATH`变量里即可。

**环境变量配置**

注意：以下代码仅供参考，SDK和NDK地址根据实际情况填写，目前仅支持NDK 26

**Linux**

```
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/26.3.11579264"
```

**MacOS**

```
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/26.3.11579264"
```

[//]: # (**Windows**)

[//]: # ()
[//]: # (```)

[//]: # ([System.Environment]::SetEnvironmentVariable&#40;"ANDROID_HOME", "$env:LocalAppData\Android\Sdk", "User"&#41;)

[//]: # ($VERSION = Get-ChildItem -Name "$env:LocalAppData\Android\Sdk\ndk")

[//]: # ([System.Environment]::SetEnvironmentVariable&#40;"ANDROID_NDK_HOME", "$env:LocalAppData\Android\Sdk\ndk\$VERSION", "User"&#41;)

[//]: # (// TODO Set PATH & CARGO_NDK_SYSROOT_LIBS_PATH env)

[//]: # (```)

另外，需要安装安卓相关targets和`deft-cli`工具包，执行以下代码可快速安装。

```bash
cargo install deft-cli
rustup target add aarch64-linux-android
rustup target add x86_64-linux-android
```

### 创建工程

执行下面命令，快速创建新工程，demo为新工程名称。
```bash
npm create deft demo
```
根据自己的喜好选择语言和框架。

命令执行完后，会在当前目录下创建一个`demo`项目，默认情况下，新建的工程是不包含Android工程文件的，执行下面命令，初始化Android工程。

```bash
cd demo
deft init android
```

AppID可以随便填，避免和已有App重复且格式正确即可，参考示例：`com.example.myapp`。

然后执行以下代码启动项目：

```bash
npm install
npm run dev
```

启动成功后，会看到如下输出：

```text
...
webpack 5.91.0 compiled successfully in 1547 ms

----------------------------------------------------------
Press r to run on this device
Press a to run on the connected android device(arm64)
Press x to run on the connected android device(x86_64)
Press q to quit
----------------------------------------------------------

```

### 构建预览

预览前，确保Android设备已经连接到电脑并开启USB调试模式（如果是使用AndroidStudio创建的模拟器，确保模拟器已经启动即可，不需要额外设置）

根据自己的Android设备架构(windows+模拟器一般是x86_64，真机或Mac+模拟器一般是arm64)，按`a`或`x`即可开始构建预览应用。首次构建，需要下载依赖，所以耗时可能会比较长，可以配置cargo镜像提高下载速度。

构建成功后，会自动在已连接的Android设备内启动预览，可以直接修改ui目录下的JS/TS文件实时预览效果。

# 目录结构

```text
├── android               -- Android工程相关文件
├── build.rs              -- Cargo构建脚本
├── Cargo.toml            -- Cargo项目配置文件
├── package.json          -- JS项目配置文件
├── src                   -- Rust源代码
│     └── main.rs
├── tsconfig.json         -- TypeScript配置文件
├── ui                    -- JS/CSS源码
│     ├── main.ts         -- JS入口文件
│     ├── App.vue
│     └── deft-env.d.ts
└── webpack.config.js     -- Webpack配置文件
```

# 打包

执行下面命令构建release版so库
```bash
npm run build:android
```
构建完成后，使用`AndroidStudio`打开`android`目录，和普通Android应用一样打包即可。