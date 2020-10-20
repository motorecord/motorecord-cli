import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // 去掉url中的#
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('./views/layout.vue')
        }
    ]
})

export default router