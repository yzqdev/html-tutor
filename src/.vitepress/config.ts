import { defineConfig } from 'vitepress'
import { navbar } from './nav'
import { sidebar } from './sidebar'
export default defineConfig({
  base: '/html-tutor/',

  // site-level locales config
outDir:"../dist",
  head: [
    // ['link', { rel: 'shortcut icon', type: 'image/png', href: '/hero.png' }],
    // ['link', { rel: 'shortcut icon', type: 'image/png', href: '/hero.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }],
  ],
  lang: 'zh-CN',
  title: 'html教程',
  description: 'Vue 驱动的静态网站生成器',
  vue: {},
markdown:{
theme: {light:'github-light',dark:'solarized-light'}
},
  themeConfig: {
    logo: '/vue.svg',
    search: {
      provider: 'local',
    },
    // theme-level locales config

    // navbar
    nav: navbar,

    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yzqdev/html-tutor' },
    ],
    editLink: {
      pattern:
        'https://github.com/yzqdev/html-tutor/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present yzqdev',
    },
  },
})
