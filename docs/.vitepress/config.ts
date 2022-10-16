module.exports = {
  title: 'ikun的篮球空间',
  description: 'just like basketball',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'godkun/basketball',
    logo: '/logo.svg',
    docsDir: 'docs',
    nav: [{ text: 'github', link: 'https://github.com/godkun/basketball' }],
    sidebar: [
      {
        text: '教程视频',
        items: [
          { text: '屈髋', link: '/guide/教程视频-屈髋' },
          { text: '防守断球', link: '/guide/教程视频-防守断球' }
        ],
      },
      {
        text: '训练方案',
        items: [{ text: '投篮', link: '/guide/训练方案-投篮' }]
      }
    ],

    editLink: {
      pattern: 'https://github.com/godkun/basketball/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
