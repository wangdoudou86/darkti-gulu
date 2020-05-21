module.exports = {
    title: 'Dark UI',
    // description: 'Just playing around',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'}
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }
  }