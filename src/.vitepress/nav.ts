import { DefaultTheme } from "vitepress/types/default-theme";
export const navbar: DefaultTheme.NavItem[] = [
  {
    text: '主页',
    activeMatch: '^/guide/',
    link: '/guide/',
  },
  {
    text: 'css主页',
    activeMatch: '^/css-tutor/',
    link: '/css-tutor/',
  },
  {
    text: '插件',
    activeMatch: '^/dom-tutor/',
    link: '/dom-tutor/side1',
  },
  {
    text: '侧边',
    activeMatch: '^/others/',
    link: '/others/',
  },
  {
    text: '其他',
    items: [
      { text: 'index', link: '/others/index' },
      { text: 'conf', link: '/others/conf' },
      { text: 'outline', link: '/others/outline' },
    ],
  },
]
