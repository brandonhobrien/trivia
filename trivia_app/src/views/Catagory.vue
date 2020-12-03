<template>
  <div>
    <h1> Catagory: {{ curCat.name }} </h1>
    <h2> Creator: {{ curCat.creator }} </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      curCat: {},
      curCatIndex: {}
    }
  },
  computed: {
    ...mapState([
      'catagories'
    ])
  },
  mounted () {
    const curCatIndex = this.catagories.findIndex((element) => element.name === this.$route.params.id)
    const curCat = this.catagories[curCatIndex]
    this.curCat = curCat
    this.curCatIndex = curCatIndex
  }
}
</script>
