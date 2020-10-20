import { createRouter, createWebHistory } from 'vue-router'
import routes from './common/config/router.js'

const router = createRouter({
    history: createWebHistory(), // 去掉url中的#
    routes
})

export default router