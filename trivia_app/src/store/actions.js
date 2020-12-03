export default {
  addCat: ({ commit }, payload) => {
    commit('appendCat', payload)
  }
}
