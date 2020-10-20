let routes = [
    {
        path: '/',
        name: 'layout',
        component: 'layout',
        children: [
            {
                path: '/index',
                name: 'index',
                component: 'index/index'
            }
        ]
    },
    { // 其他路径跳转到首页
        path: '/:catchAll(.*)',
        redirect: { name: 'index' }
    }
]

// 自动生成路由
function createRoute(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].component) return arr;
        // 自动生成component
        let componentFun = import(`../../views/${arr[i].component}.vue`);
        arr[i].component = () => componentFun;
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children);
        }
    }
}

// 获取路由信息
function getRoutes() {
    // 自动生成路由
    createRoute(routes);
    return routes;
}

export default getRoutes()