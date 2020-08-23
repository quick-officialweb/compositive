import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'test',
      name: 'Test-page',
      component: () => import("@/pages/test")
    },
    /* -------------------- 前台 -------------------- */
    {
      path: '/',
      name: 'Front-Main',
      component: () => import("@/pages/front/main"),
      redirect: "/home",
      children: [
        {
          path: 'home',
          name: 'Front-Home',
          component: () => import("@/pages/front/home")
        }
      ]
    },
    /* -------------------- 后台 -------------------- */
    {
      path: '/login',
      name: 'Back-Login',
      component: () => import("@/pages/back/login")
    },
    {
      path: '/back',
      name: 'Back-Main',
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem("token")) {
          next();
        } else {
          alert("未登录，请先登录！");
          next({ path: '/login' });
        }
      },
      component: () => import("@/pages/back/main"),
      redirect: "/back/home",
      children: [
        {
          path: 'home',
          name: 'Back-Home',
          component: () => import("@/pages/back/home")
        }
      ]
    },
  ]
})
