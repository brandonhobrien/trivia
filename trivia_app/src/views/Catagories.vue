<template>
  <div>
    <h1> Question Catagories </h1>
    <b-table striped hover dark :items="catagories">
      <template #cell(name)="data">
        <a :href="`catagory/${data.index}`">
          {{ data.value }}
        </a>
      </template>
    </b-table>
  </div>
</template>

<script>
import catagories from '@/data/catagories'

export default {
  data () {
    return {
      catagories
    }
  }
}
</script>
