import Vue from 'vue'

export const state = Vue.observable({
  count: 0
})

export const mutations = {
  SET_COUNT(number) {
    if (number > 0) {
      state.count = number
    }
  }
}
