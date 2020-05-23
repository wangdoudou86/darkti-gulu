module.exports = {
    base: '/darkti-gulu/',
    title: 'Dark UI',
    // description: 'Just playing around',
    cache: false,
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
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs'
                    // '/components/popover',
                    // '/components/collapse'
                ]
            }
        ]
    }
  }