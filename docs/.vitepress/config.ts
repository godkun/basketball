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
          { text: '屈髋', link: '/guide/教程视频-屈髋' },
          { text: '防守断球', link: '/guide/教程视频-防守断球' }
        ]
      },
      {
        text: '训练方案',
        items: [{ text: '投篮', link: '/guide/训练方案-投篮' }]
      },
      {
        text: '篮球装备',
        items: [{ text: '篮球', link: '/guide/篮球装备-篮球' }]
      },
      {
        text: 'ikun篮球空间',
        items: [
          { text: '首页', link: '/guide/ikun篮球空间-首页' },
          { text: '联系作者', link: '/guide/ikun篮球空间-联系作者' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/godkun/basketball/edit/main/docs/:path',
      text: '点击编辑此页'
    }
  }
}
