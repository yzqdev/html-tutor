import { defineUserConfig } from 'vuepress'

import theme from './theme'
import SearchPlugin from 'vuepress2-plugin-full-text-search'
export default defineUserConfig({
  base: '/html-tutor/',
  dest: './dist',
  locales: {
    '/': {
      // 设置正在使用的语言
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/logo.png`,
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],

    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config

  lang: 'zh-CN',
  title: 'js教程',
  description: 'JavaScript教程',

  theme: theme,

  plugins: [
    SearchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
  ],
})
