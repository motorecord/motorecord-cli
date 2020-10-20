let routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../../views/layout.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('../../views/index/index.vue')
            }
        ]
    },
    { // 其他路径跳转到首页
        path: '/:catchAll(.*)',
        redirect: { name: 'index' }
    }
]

export default routes