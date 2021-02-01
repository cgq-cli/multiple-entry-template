// const lazyload = name => () => import(`@/views/admin/pages/${name}`)

export default [
    {
        path: '/',
        meta: {
            name: '测试页'
        },
        component: () => import(/* webpackChunkName: "index" */ '@/views/admin/pages/index.vue')
    }
]
