import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  iconAssets: 'iconfont',

  logo: '/logo.svg',

  repo: 'yzqdev/html-tutor',

  docsDir: 'docs',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-hope</a>`,

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  plugins: {
    blog: false,
    prismjs: {
      light: 'tomorrow',
      dark: 'tomorrow',
    },

    mdEnhance: {
      tabs: true,
      codetabs: true,
      demo: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      vuePlayground: true,

      //start playground 配置
      playground: {
        presets: [
          'ts',
          'vue',
          {
            name: 'playground#language',
            component: 'PlaygroundComponent',
            propsGetter: (playgroundData): Record<string, string> => ({
              // playground props
            }),
          },
        ],
        config: {
          ts: {
            // ...
          },
          vue: {
            // ...
          },
        },
      },
    },
  },
})
