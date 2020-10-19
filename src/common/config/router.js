let routes = [
    {
        path: '/',
        name: 'layout',
        // component: resolve => require(['@/views/layout.vue'], resolve),
        component: 'layout',
        children: [
            {
                path: '/index',
                name: 'index',
                // component: resolve => require(['@/views/index/index.vue'], resolve)
                component: 'index/index'
            }
        ]
    },
    { // 其他路径跳转到首页
        path: '*',
        redirect: { name: 'index' }
    }
]

// 获取路由信息的方法
const getRouters = function () {
    createRoute(routes)
    return routes
}
// 自动生成路由
function createRoute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].component) return
        // 自动生成component
        arr[i].component = () => import(`@/views/${arr[i].component}.vue`)
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children)
        }
    }
}

export default getRouters()