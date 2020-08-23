const directives = {
  // 获取焦点
  focus: (el) => {
    el.focus();
  },

}



export default {
  install(Vue) {
    Object.keys(directives).forEach(item => {
      Vue.directive(item, {
        inserted: directives[item]
      })
    })
  }
}
