import { defineClientConfig } from '@vuepress/client'

import hope from 'vuepress-theme-hope/package.json'
import vuePkg from 'vue/package.json'

import vp from 'vuepress/package.json'
/**
 * *显示版本
 *
 * @param name
 * @param version
 * @param nameStyle
 * @param versionStyle
 */
function showBadge(name, version, nameStyle, versionStyle) {
  console.log(
    '%c '.concat(name, ' %c ').concat(version, ' '),
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: '.concat(
      nameStyle,
      ';'
    ),
    'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: '.concat(
      versionStyle,
      ';'
    )
  )
}
showBadge('vue', vuePkg.version, '#606060', 'RGB(20,117,178)')
showBadge('vuepress', vp.version, '#606060', 'RGB(20,117,178)')
showBadge('vuepress-theme-hope', hope.version, '#606060', 'RGB(20,117,178)')
export default defineClientConfig({
  enhance({ app, router, siteData }) {},
})
