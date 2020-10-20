/* 自动生成path和name：
- 1、例如：index/index，login/index以idex结尾的，name和path会自动去除index
- 2、例如：shop/list，默认生成name为shop_list(如果结尾为index，如shop/index则是shop)
- 3、手动填写则不会自动生成
*/
let routes = [
    {
        path: '/',
        name: 'layout',
        redirect: { name: 'index' }, // 定向到首页
        component: 'layout',
        children: [
            {
                // path: '/index',
                // name: 'index',
                // component: () => import('../../views/index/index.vue')
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
        // 若有component属性的才执行，否则直接返回
        if (!arr[i].component) return;
        // 去除index
        let val = removeIndex(arr[i].component);
        // 生成name，把 斜杠 替换为 下划线
        arr[i].name = arr[i].name || val.replace(/\//g, '_');
        // 生成path
        arr[i].path = arr[i].path || `/${val}`;
        // 自动生成component
        let componentFun = import(`../../views/${arr[i].component}.vue`);
        arr[i].component = () => componentFun;
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children);
        }
    }
}

// 去除index
function removeIndex(str) {
    let index = str.lastIndexOf('/');
    let val = str.substring(index + 1, str.length);
    if (val == 'index') {
        return str.substring(index, -1);
    }
    return str;
}

// 获取路由信息
function getRoutes() {
    // 自动生成路由
    createRoute(routes);
    return routes;
}

export default getRoutes()