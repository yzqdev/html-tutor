import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/views': [
    {
      text: '视图',
      collapsed: false,
      items: [
        { text: 'dom首页', link: '/views/dom/index' },
        { text: 'layout', link: '/views/cssLayout/index' },
      ],
    },
  ],
  '/guide': [
    {
      text: 'theme配置',
      collapsed: false,

      items: [{ text: '首页', link: '/guide/index' }],
    },
    {
      text: 'app配置',
      collapsed: true,
      items: [
        { text: 'guide1', link: '/guide/markdown' },
        { text: 'guide2', link: '/guide/sidebar' },
        { text: 'images', link: '/guide/img-handle' },
        { text: 'api', link: '/guide/api' },
      ],
    },
  ],
  '/dom-tutor': [
    {
      text: '插件',
      collapsed: true,
      items: [
        { text: 'plugin1', link: '/dom-tutor/side1' },
        { text: 'plugin2', link: '/dom-tutor/side2' },
      ],
    },
  ],
  '/css-tutor': [
    {
      text: 'css教程',
      collapsed: false,
      items: [
        { text: '主页', link: '/css-tutor/index' },
        { text: 'tutor1', link: '/css-tutor/css-prop' },
        { text: 'layout', link: '/css-tutor/css-layout' },
      ],
    },
  ],
  '/others': [
    {
      text: '其他',
      collapsed: true,
      items: [
        { text: 'outline', link: '/others/outline' },
        { text: '配置', link: '/others/conf' },
      ],
    },
  ],
}
