import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/es6': [
    {
      text: '视图',
      collapsed: false,
      items: [
        { text: '类', link: '/es6/class' },
        { text: '结构', link: '/es6/deconstruct' },
        { text: 'let', link: '/es6/let' },
        { text: 'promise', link: '/es6/promise' },
        { text: 'map', link: '/es6/set-map' },
        { text: 'proxy', link: '/es6/proxy' },
        { text: 'symbol', link: '/es6/symbol' },
        { text: '原形', link: '/es6/prototype' },
        { text: '基础', link: '/es6/basic' },
      ],
    },
  ],
  '/guide': [
    {
      text: '首页',
      collapsed: false,

      items: [{ text: '首页', link: '/guide/index' }],
    },
    {
      text: '指导',
      collapsed:  false,
      items: [
        { text: '数组', link: '/guide/array' },

        { text: 'api', link: '/guide/api' },
      ],
    },
  ],
  '/dom-tutor': [
    {
      text: 'dom元素',
      collapsed:  false,
      items: [
        { text: '首页', link: '/dom-tutor/' },
        { text: 'dom方法', link: '/dom-tutor/dom' },
        { text: '创建', link: '/dom-tutor/create-dom' },
        { text: '不可复制', link: '/dom-tutor/no-copy' },
      ],
    },
  ],
  '/tips': [
    {
      text: '技巧',
      collapsed:  false,
      items: [
        { text: '数组', link: '/tips/array' },
        { text: '冒泡', link: '/tips/bubble' },
        { text: 'string', link: '/tips/string' },
        { text: '片段', link: '/tips/snip' },
        { text: '三十秒代码', link: '/tips/thirty-seconds' },
      ],
    },
  ],
  '/interview': [
    {
      text: '面试',
      collapsed:  false,
      items: [
        { text: '首页', link: '/interview/' },
        { text: '冒泡', link: '/interview/first' },
        {
          text: '手写代码',
          collapsed: false,
          items: [
            { text: '第一个', link: '/interview/handwritten/first' },
            { text: '第2个', link: '/interview/handwritten/second' },
            { text: '第3个', link: '/interview/handwritten/third' },
          ],
        },
        {
          text: '试题',
          collapsed:  false,
          items: [
            { text: '首页', link: '/interview/exam/' },
            { text: '携程', link: '/interview/exam/ctrip' },
          ],
        },
      ],
    },
  ],
  '/algorithm': [
    {
      text: '算法',
      collapsed:  false,
      items: [
        { text: '首页', link: '/algorithm/index' },
        { text: '排序', link: '/algorithm/order' },
      ],
    },
  ],
  '/css-tutor': [
    {
      text: 'css教程',
      collapsed: false,
      items: [
        { text: '主页', link: '/css-tutor/index' },
        { text: '操作', link: '/css-tutor/css-prop' },
        { text: 'layout', link: '/css-tutor/css-layout' },
        { text: '三角形', link: '/css-tutor/triangle' },
      ],
    },{
      text:'css选择器',
      collapsed:false,
      items:[
          { text: '主页', link: '/css-tutor/selector/' },
          { text: '元素', link: '/css-tutor/selector/element' },
      ]
    }
  ],
  '/others': [
    {
      text: '其他',
      collapsed: true,
      items: [
        { text: 'outline', link: 'https://yzqdev.github.io/cs-guide/' },

      ],
    },
  ],
}
