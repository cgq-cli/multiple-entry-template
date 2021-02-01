// const lazyload = name => () => import(`@/views/h5/pages/${name}`)

export default [
    {
        path: '/',
        meta: {
            name: '测试2'
        },
        component: () => import(/* webpackChunkName: "test" */ '@/views/h5/pages/index.vue')
    }
]
