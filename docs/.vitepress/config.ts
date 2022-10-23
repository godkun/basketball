module.exports = {
  title: 'ikun的篮球空间',
  description: 'love basketball',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'godkun/basketball',
    logo: '/logo.svg',
    docsDir: 'docs',
    nav: [{ text: 'Guide', link: '/guide/教程视频-屈髋' }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/godkun/basketball' }
    ],
    sidebar: [
      {
        text: '教程视频',
        items: [
          { text: '首页', link: '/教程视频/' },
          { text: '屈髋', link: '/教程视频/屈髋' },
          { text: '防守断球', link: '/教程视频/防守断球' },
          {
            text: 'one motion投篮过程分解',
            link: '/教程视频/one motion投篮过程分解'
          },
          {
            text: '手指运球',
            link: '/教程视频/手指运球'
          },
          {
            text: '挖步突破',
            link: '/教程视频/挖步突破'
          }
        ]
      },
      {
        text: '训练方案',
        items: [
          { text: '首页', link: '/训练方案/' },
          { text: '投篮', link: '/训练方案/投篮' }
        ]
      },
      {
        text: '篮球战术',
        items: [{ text: '首页', link: '/战术/' }]
      },
      {
        text: '篮球规则',
        items: [{ text: '首页', link: '/规则/' }]
      },
      {
        text: '篮球装备',
        items: [{ text: '首页', link: '/装备/' }]
      },
      {
        text: 'ikun篮球空间',
        items: [
          { text: '首页', link: '/ikun/' },
          { text: '联系作者', link: '/ikun/联系作者' },
          { text: '交流群', link: '/ikun/交流群' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/godkun/basketball/edit/main/docs/:path',
      text: '点击编辑此页'
    }
  }
}
