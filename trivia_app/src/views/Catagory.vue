<template>
  <div>
    <h1> Catagory: {{ currentCat().name }} </h1>
    <h2> Creator: {{ currentCat().creator }} </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'catagories'
    ])
  },
  methods: {
    currentCat () {
      const curCat = this.catagories[this.$route.params.id]
      return curCat
    }
  }
}
</script>
