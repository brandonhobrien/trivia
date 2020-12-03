export default {
  appendCat: (state, { catagories, newCat }) => {
    state[catagories].push(newCat)
  }
}
