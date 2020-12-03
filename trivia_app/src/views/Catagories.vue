<template>
  <div>
    <h1> Question Catagories </h1>
    <button class="btn tbn-primary">Add New Catagory</button>
    <b-table striped hover dark
    :items="catagories"
    :fields="fields"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    responsive="sm">
      <template #cell(name)="data">
        <a :href="`catagory/${data.value}`">
          {{ data.value }}
        </a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showCatagoryForm: false,
      sortBy: 'name',
      sortDesc: false,
      fields: [
        { key: 'name', sortable: true },
        { key: 'creator', sortable: true }
      ]
    }
  },
  computed: {
    ...mapState([
      'catagories'
    ])
  },
  methods: {
    toggleCatagoryForm () {
      this.showCatagoryForm = !this.showCatagoryForm
    }
  }
}
</script>
