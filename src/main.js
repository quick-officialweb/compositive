// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './router/guards'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/api'
import filters from './filters'
import directives from './directives'
import compoents from './components'






Vue.config.productionTip = false
Vue.prototype.$api = api






Vue.use(ElementUI);
Vue.use(filters);
Vue.use(directives);
Vue.use(compoents);







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
