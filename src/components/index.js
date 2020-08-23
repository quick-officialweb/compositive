// 全局设置组件
import Hellow from './HelloWorld.vue'
import BackMenu from './backs/menu.vue'

const components = {
    Hellow,
    BackMenu
}

export default {
    install(Vue) {
        Object.keys(components).forEach(item => {
            Vue.component(components[item].name, components[item])
        })
    }
}

