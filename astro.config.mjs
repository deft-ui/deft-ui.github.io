// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://deft-ui.github.io',
	// base: 'deft-docs',
	integrations: [
		starlight({
			title: 'Deft',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/deft-ui/deft',
			},
			sidebar: [
				{
					label: '入门',
					items: [
						{
							label: "简介",
							slug: "guides/what-is-deft",
						},
						{
							label: "环境准备",
							slug: "guides/prerequisites",
						},
						{
							label: "创建第一个工程",
							slug: "guides/create-project",
						}
					],
				},
				{
					label: '组件',
					items: [
						{
							label: '安装',
							slug: 'components/install'
						},
						{
							label: '基类 Element',
							slug: 'components/element',
						},
						{
							label: '标签 Label',
							slug: 'components/label',
						},
						{
							label: '按钮 Button',
							slug: 'components/button',
						},
						{
							label: '图片 Image',
							slug: 'components/image',
						},
						{
							label: '输入框 Entry',
							slug: 'components/entry',
						},
						{
							label: '段落 Paragraph',
							slug: 'components/paragraph',
						},
						{
							label: '容器 Container',
							slug: 'components/container',
						},
						{
							label: '滚动容器 Scroll',
							slug: 'components/scroll',
						},

					]
				},
				{
					label: '样式',
					slug: 'guides/style',
				},
				{
					label: 'API',
					items: [
						{
							label: '窗体 Window',
							slug: 'api/window',
						},
						{
							label: '音频 Audio',
							slug: 'api/audio',
						},
						{
							label: '剪贴板 Clipboard',
							slug: 'api/clipboard',
						},
						{
							label: '控制台 Console',
							slug: 'api/console',
						},
						{
							label: '文件对话框 FileDialog',
							slug: 'api/filedialog',
						},
						{
							label: '本地储存 LocalStorage',
							slug: 'api/localstorage',
						},
						{
							label: '进程 Process',
							slug: 'api/process',
						},
						{
							label: '定时器 Timer',
							slug: 'api/timer',
						},
						{
							label: '任务栏图标 SystemTray',
							slug: 'api/tray',
						},
						{
							label: '后台线程 Worker',
							slug: 'api/worker',
						},
						{
							label: 'WebSocket',
							slug: 'api/websocket',
						},
						{
							label: 'Sqlite',
							slug: 'api/sqlite',
						},
					]
				},
				{
					label: '进阶',
					items: [
						{
							label: '动画',
							slug: 'advanced/animation',
						},
						{
							label: 'Rust/JavaScript通信',
							slug: 'advanced/ffi',
						},
						{
							label: '自定义组件',
							slug: 'advanced/custom-component',
						},
					]
				}
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
