// not working. pushing directly to array in catagories.vue
export default {
  addCatagory: ({ commit }, payload) => {
    commit('appendCatagory', payload)
  }
}
