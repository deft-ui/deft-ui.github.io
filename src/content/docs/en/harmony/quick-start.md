---
title: Quick Start
---

### Environment Preparation

Please make sure that the [Deft basic environment](/guides/prerequisites) is configured.

Then you need to install `DevEco Studio`, if not installed, you can directly download and install it from the official website.

Otherwise, you need to install Harmony related targets and the'deft-cli 'toolkit. You can install them by running the following code:

```bash
rustup target add aarch64-unknown-linux-ohos
rustup target add x86_64-unknown-linux-ohos
cargo install deft-cli
```

After DevEcoStudio is installed, go to `File`->`Settings`->`OpenHarmony SDK`, download the SDK, select API version 14 or 15, and install the `Native` and `Toolchains` modules. Other modules can be left unselected.

SDK installation is complete, configure the `OHOS_SDK_HOME` and `DEVECO_HOME` environment variables.

`OHOS_SDK_HOME` is the SDK installation path (including the version number), and `DEVECO_HOME` is the DevEcoStudio installation directory.

Windows example:

```bash
set OHOS_SDK_HOME=C:\Users\dev\AppData\Local\OpenHarmony\Sdk\15
set DEVECO_HOME=C:\Program Files\Huawei\DevEco Studio
```

MacOS example:

```
export OHOS_SDK_HOME=/Users/dev/Library/OpenHarmony/Sdk/15
export DEVECO_HOME=/Applications/DevEco-Studio.app/Contents
```

### Create Project

Execute the following command to create a new project, demo is the name of the new project.
```bash
npm create deft@0.7 demo
```
Select the language and framework according to your preference.

After the command is executed, a `demo` project will be created in the current directory, by default, the newly created project does not contain the Harmony project file. Execute the following command to initialize the Harmony project.

```bash
cd demo
deft init ohos
```

AppID can be filled in arbitrarily, as long as the format is correct, for example: `com.example.myapp`.

Then execute the following code to start the project:

```bash
npm install
npm run dev
```

After the project is started, you will see the following output:

```text
...
webpack 5.91.0 compiled successfully in 1828 ms

----------------------------------------------------------
Press r to run on this device
Press h to run on the connected HarmonyOS device(arm64)
Press e to run on the connected HarmonyOS device(x86_64)
Press q to quit
----------------------------------------------------------

```

### Build Preview

Before previewing, make sure that the Harmony device is connected to the computer and enabled USB debugging (if the simulator is created using DevEcoStudio, you do not need to set it up separately)

Depending on the architecture of your Harmony device (Windows + simulator is x86_64, the simulator or Mac + simulator is arm64), press `e` or `h` to start building and previewing the application. The first build may take some time to download dependencies, so you can configure the cargo mirror to speed up the download.

After the build is successful, the preview will automatically start on the connected Harmony device. You can modify the JS/TS files in the `ui` directory to preview the effect in real time.

# Directory Structure

```text
├── ohos                  -- Harmony project files
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

Execute the following command to build the release version of the so library:
```bash
npm run build:ohos
```
After the build is complete, open the `ohos` directory using `DevEcoStudio` and package it as a normal Harmony application.