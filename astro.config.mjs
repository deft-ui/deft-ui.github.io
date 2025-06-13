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
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English'
				  },
				'zh-cn': {
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
					translations: {
						'zh-CN': '入门',
					},
					items: [
						{
							label: "简介",
							translations: {
								'zh-CN': '简介',
							},
							slug: "guides/what-is-deft",
						},
						{
							label: "Environment Setup",
							translations: {
								'zh-CN': '环境准备',
							},
							slug: "guides/prerequisites",
						},
						{
							label: "Create First Project",
							translations: {
								'zh-CN': '创建第一个工程',
							},
							slug: "guides/create-project",
						},
						{
							label: "Optional Features",
							translations: {
								'zh-CN': '可选特性',
							},
							slug: "guides/features",
						},
						{
							label: "架构",
							translations: {
								'zh-CN': '架构',
							},
							slug: "guides/architecture",
						}
					],
				},
				{
					label: 'Components',
					translations: {
						'zh-CN': '组件',
					},
					items: [
						// {
						// 	label: '安装',
						// 	slug: 'components/install'
						// },
						{
							label: 'Components Preview',
							translations: {
								'zh-CN': '组件预览',
							},
							slug: "components/gallery",
						},
						{
							label: 'Element',
							translations: {
								'zh-CN': '基类 Element',
							},
							slug: 'components/element',
						},
						{
							label: 'Label',
							slug: 'components/label',
							translations: {
								'zh-CN': '标签 Label',
							},
						},
						{
							label: 'Button',
							slug: 'components/button',
							translations: {
								'zh-CN': '按钮 Button',
							}
						},
						{
							label: 'Image',
							slug: 'components/image',
							translations: {
								'zh-CN': '图片 Image',
							}
						},
						{
							label: 'TextInput',
							slug: 'components/text-input',
							translations: {
								'zh-CN': '单行输入框 TextInput',
							}
						},
						{
							label: 'TextEdit',
							slug: 'components/text-edit',
							translations: {
								'zh-CN': '多行输入框 TextEdit',
							}
						},
						{
							label: 'Radio',
							slug: 'components/radio',
							translations: {
								'zh-CN': '单选按钮 Radio',
							}
						},
						{
							label: 'Checkbox',
							slug: 'components/checkbox',
							translations: {
								'zh-CN': '复选框 Checkbox',
							}
						},
						{
							label: 'Select',
							slug: 'components/select',
							translations: {
								'zh-CN': '下拉框 Select',
							}
						},
						{
							label: 'RichText',
							slug: 'components/rich-text',
							translations: {
								'zh-CN': '富文本 RichText',
							}
						},
						{
							label: 'Container',
							slug: 'components/container',
							translations: {
								'zh-CN': '容器 Container',
							}
						},
						// {
						// 	label: 'Scroll',
						// 	slug: 'components/scroll',
						// 	translations: {
						// 		'zh-CN': '滚动容器 Scroll',
						// },
						{
							label: 'Video',
							slug: 'components/video',
							translations: {
								'zh-CN': '视频 Video',
							}
						},
					]
				},
				{
					label: 'Styles',
					translations: {
						'zh-CN': '样式',
					},
					items: [
						{
							label: '概述',
							slug: 'styles/overview',
						},
						{
							label: '属性',
							slug: 'styles/properties',
						},
						{
							label: '选择器',
							slug: 'styles/selector',
						},
						{
							label: '长度',
							slug: 'styles/length',
						},
						{
							label: '颜色',
							slug: 'styles/color',
						},
						{
							label: '2D变换',
							slug: 'styles/transform',
						}
					]
				},
				{
					label: 'API',
					items: [
						{
							label: '窗体 Window',
							slug: 'api/window',
						},
						{
							label: '网络请求 Fetch',
							slug: 'api/fetch',
						},
						{
							label: 'WebSocket',
							slug: 'api/websocket',
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
							label: 'Sqlite',
							slug: 'api/sqlite',
						},
					]
				},
				{
					label: 'Advanced',
					translations: {
						'zh-CN': '进阶',
					},
					items: [
						{
							label: 'Animation',
							slug: 'advanced/animation',
							translations: {
								'zh-CN': '动画',
							}
						},
						{
							label: 'Rust/JavaScript通信',
							slug: 'advanced/ffi',
							translations: {
								'zh-CN': 'Rust/JavaScript通信',
							}
						},
						{
							label: 'Renderers',
							slug: 'advanced/renderers',
							translations: {
								'zh-CN': '渲染器',
							}
						},
						{
							label: 'Custom Component',
							slug: 'advanced/custom-component',
							translations: {
								'zh-CN': '自定义组件',
							}
						},
					]
				},
				{
					label: 'HarmonyOS',
					translations: {
						'zh-CN': '鸿蒙',
					},
					items: [
						{
							label: 'Get Started',
							slug: 'harmony/quick-start',
							translations: {
								'zh-CN': '快速开始',
							}
						}
					]
				},
				{
					label: 'Android',
					translations: {
						'zh-CN': '安卓',
					},
					items: [
						{
							label: 'Get Started',
							translations: {
								'zh-CN': '快速开始',
							},
							slug: 'android/quick-start'
						}
					]
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
