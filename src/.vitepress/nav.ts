import { DefaultTheme } from 'vitepress/types/default-theme'

export const navbar: DefaultTheme.NavItem[] = [
  {
    text: '主页',
    activeMatch: '^/guide/',
    link: '/guide/',
  },
  {
    text: 'css',
    activeMatch: '^/css-tutor/',
    link: '/css-tutor/',
  },
  {
    text: 'dom',
    activeMatch: '^/dom-tutor/',
    link: '/dom-tutor/',
  },
  {
    text: 'es6',
    activeMatch: '^/es6/',
    link: '/es6/',
  },
  {
    text: '算法',
    activeMatch: '^/algorithm/',
    link: '/algorithm/',
  },
  {
    text: 'tips',
    activeMatch: '^/tips/',
    link: '/tips/',
  },
  {
    text: '面试',
    activeMatch: '^/interview/',
    link: '/interview/',
  },
  {
    text: '其他',
    items: [
      { text: '计算机教程', link: 'https://yzqdev.github.io/cs-guide/' },

    ],
  },
]
