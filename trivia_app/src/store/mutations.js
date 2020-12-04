
export default {
  appendCatagory: (state, { catagories, payload }) => {
    state[catagories].push(payload)
  }
}
