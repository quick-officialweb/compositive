/* -------------------------------- 导航守卫 -------------------------------- */
import router from './index';


// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (sessionStorage.getItem("token")) {
        next()
    } else {
        if (to.path !== '/login') {
            alert("未登录，请先登录！")
            next({ path: '/login' })
        } else {
            next()
        }
    }
})

/* // 全局解析守卫
router.beforeResolve((to, from) => {
    console.log(to,from)
})

// 全局后置钩子
router.afterEach((to, from) => {
    console.log(to,from)
}) */
