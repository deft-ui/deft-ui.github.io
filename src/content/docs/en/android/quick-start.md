---
title: Quick Start
---

### Environment Preparation

Please make sure that the [Deft basic environment](/guides/prerequisites) is configured.

**Install NDK**

1. Go to Android official webside to download and install Android Studio.

2. Use the `SDK Manager` in Android Studio to install the following components.

    * Android SDK Platform
    * Android SDK Platform-Tools
    * NDK 26 (Side by side)
    * Android SDK Build-Tools
    * Android SDK Command-line Tools

**Install JRE 17**

**Method 1**

Go to [Java Official](https://www.java.com/) to download and install. You can also install JRE/JDK provided by other vendors.

**Method 2**

Using the JRE provided by Android Studio, you can directly add `AndroidStudio安装目录/jbr/bin` to the `PATH` variable.

**Environment variable configuration**

Note: The following code is only for reference, the SDK and NDK addresses need to be filled in according to actual cases, currently only NDK 26 is supported

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

Other, you need to install the Android related targets and `deft-cli` toolkit. You can install them by running the following code:

```bash
cargo install deft-cli
rustup target add aarch64-linux-android
rustup target add x86_64-linux-android
```

### Create Project

Execute the following command to create a new project, demo is the name of the new project.
```bash
npm create deft demo
```
Select the language and framework according to your preference.

After the command is executed, a `demo` project will be created in the current directory, by default, the newly created project does not contain the Android project file. Execute the following command to initialize the Android project.

```bash
cd demo
deft init android
```

AppID can be filled in arbitrarily, as long as the format is correct, for example: `com.example.myapp`.

Then execute the following code to start the project:

```bash
npm install
npm run dev
```

After the command is executed, you will see the following output:

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

### Build Preview

Before preview, make sure that the Android device is connected to the computer and the USB debugging mode is turned on (if the simulator is created using AndroidStudio, it does not need to be set up separately).

Depending on the architecture of your Android device (Windows + simulator is x86_64, the real device or Mac + simulator is arm64), you can start the preview application by pressing `a` or `x`. The first build may take a long time to download dependencies, you can configure cargo mirror to speed up download.

After the command is executed, the preview application will be started on the connected Android device. You can directly modify the JS/TS files in the `ui` directory to preview the effect in real time.

# Directory Structure

```text
├── android               -- Android project directory
├── build.rs              -- Cargo build script file
├── Cargo.toml            -- Cargo project configuration file
├── package.json          -- JS project configuration file
├── src                   -- Rust source code
│     └── main.rs
├── tsconfig.json         -- TypeScript configuration file
├── ui                    -- JS/CSS source code
│     ├── main.ts         -- JS entry file
│     ├── App.vue
│     └── deft-env.d.ts
└── webpack.config.js     -- Webpack configuration file
```

# Build

Execute the following command to build the release version of the so library.
```bash
npm run build:android
```
After the command is executed, open the `android` directory with Android Studio, and package it as a normal Android application.