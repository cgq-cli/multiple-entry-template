import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import store from '../store/index'

Vue.use(Router)
// 关闭loading
NProgress.configure({ showSpinner: false })// NProgress Configuration

const router = new Router({
    mode: 'hash',
    routes: [
                {
                  path: '/login',
                  name: 'login',
                  meta: {
                    title: '登录注册',
                    requireAuth: false
                  },
                  component: () => import('../views/login.vue')
                },
                {
                    path: '/',
                    name: 'home',
                    meta: {
                        title: '首页',
                        requireAuth: false
                    },
                    component: () => import('../views/home.vue'),
                    children: [
                        {
                            path: '/businessStatistics',
                            name: '业务统计',
                            meta: {
                                title: '业务统计',
                                requireAuth: false
                            },
                            component: () => import('../views/businessStatistics.vue'),
                            children: [
                                {
                                    path: '/main',
                                    name: 'main',
                                    meta: {
                                        title: 'main',
                                        requireAuth: true
                                    },
                                    component: () => import('../views/main.vue')
                                },
                                {
                                    path: '/about',
                                    name: 'about',
                                    meta: {
                                        title: 'about',
                                        requireAuth: true
                                    },
                                    component: () => import('../views/about.vue')
                                }
                            ]
                        },
                        {
                            path: '/testScroll',
                            name: 'testScroll',
                            meta: {
                                title: 'testScroll',
                                requireAuth: true
                            },
                            component: () => import('../views/testScroll.vue')
                        },
                        {
                            path: '/tree',
                            name: 'tree',
                            meta: {
                                title: 'tree',
                                requireAuth: false
                            },
                            component: () => import('../views/index.vue')
                        },
                        {
                            path: '/detail/:id',
                            name: 'detail',
                            meta: {
                                title: 'detail',
                                requireAuth: true
                            },
                            component: () => import('../views/detail.vue')
                        }
                    ]
                },                
            ]
})

// const whiteList = ['/login', '*']

//路由钩子
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || ''
    NProgress.start()
    // next()
    // // 已登录
    // if(Object.keys(store.getters.userInfo).length){
    //     next()
    // }else{
    //     // 未登录 白名单
    //     if(whiteList.indexOf(to.path)>-1){
    //         next()
    //     }else{
    //         next(`/login?redirect=${to.path}`)
    //     }
    // }
    if(to.meta.requireAuth&&!sessionStorage.getItem('isLogin')){
        next('/login')
    }else{
        store.dispatch('user/queryUserInfo', JSON.parse(sessionStorage.getItem('userInfo')))
        store.commit('user/setCount', sessionStorage.getItem('count'))
        next()
    }
})

//路由钩子 --- 进入后： 回到顶部
router.afterEach(() => {
    NProgress.done()
    window.scrollTo(0, 0)
})
export default router
