let routes = [
    {
        path: '/hello',
        name: 'HelloWorld',
        component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
        path: '/',
        name: 'layout',
        component: resolve => require(['@/views/layout.vue'], resolve),
        children: [
            {
                path: '/index',
                name: 'index',
                component: resolve => require(['@/views/index/index.vue'], resolve)
            }
        ]
    },
    { // 其他路径跳转到首页
        path: '*',
        redirect: { name: 'index' }
    }
]

export default routes