---
title: 快速开始
---

### 环境准备

请确认[Deft基础环境](/guides/prerequisites)已经配置

然后需要安装`DevEco Studio`，如果未安装，直接去官网下载安装即可。

另外，需要安装鸿蒙相关targets和`deft-cli`工具包，执行以下代码可快速安装。

```bash
rustup target add aarch64-unknown-linux-ohos
rustup target add x86_64-unknown-linux-ohos
cargo install deft-cli
```

DevEcoStudio安装完成后，进入`File`->`Settings`->`OpenHarmony SDK`，下载SDK，API版本选择14或者15，需要安装`Native`和`Toolchains`模块，其他模块可以不选。

SDK安装完成后，配置一下`OHOS_SDK_HOME`和`DEVECO_HOME`环境变量。

`OHOS_SDK_HOME`为SDK安装路径（含版本号），`DEVECO_HOME`为DevEcoStudio安装目录。

Windows参考示例：

```bash
set OHOS_SDK_HOME=C:\Users\dev\AppData\Local\OpenHarmony\Sdk\15
set DEVECO_HOME=C:\Program Files\Huawei\DevEco Studio
```

MacOS参考示例:

```
export OHOS_SDK_HOME=/Users/dev/Library/OpenHarmony/Sdk/15
export DEVECO_HOME=/Applications/DevEco-Studio.app/Contents
```

### 创建工程

执行下面命令，快速创建新工程，demo为新工程名称。
```bash
npm create deft@0.7 demo
```
根据自己的喜好选择语言和框架。

命令执行完后，会在当前目录下创建一个`demo`项目，默认情况下，新建的工程是不包含鸿蒙工程文件的，执行下面命令，初始化鸿蒙工程。

```bash
cd demo
deft init ohos
```

AppID随便填，格式正确即可，参考示例：`com.example.myapp`。

然后执行以下代码启动项目：

```bash
npm install
npm run dev
```

启动成功后，会看到如下输出：

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

### 构建预览

预览前，确保鸿蒙设备已经连接到电脑并开启USB调试模式（如果是使用DevEcoStudio创建的模拟器，确保模拟器已经启动即可，不需要额外设置）

根据自己的鸿蒙设备架构(windows+模拟器一般是x86_64，真机或Mac+模拟器一般是arm64)，按`e`或`h`即可开始构建预览应用。首次构建，需要下载依赖，所以耗时可能会比较长，可以配置cargo镜像提高下载速度。

构建成功后，会自动在已连接的鸿蒙设备内启动预览，可以直接修改ui目录下的JS/TS文件实时预览效果。

# 目录结构

```text
├── ohos                  -- 鸿蒙工程相关文件
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
npm run build:ohos
```
构建完成后，使用`DevEcoStudio`打开`ohos`目录，和普通鸿蒙应用一样打包即可。