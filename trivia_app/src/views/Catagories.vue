<template>
  <div>
    <h1> Question Catagories </h1>
    <button @click="toggleCatagoryForm" class="btn tbn-primary">Add New Catagory</button>

    <form @submit="handleSubmit" v-if="showCatagoryForm">
      <div class="form-group">
        <label for="catagoryName">Catagory Name:</label>
        <input type="catagory" class="form-control" id="exampleCatagory" aria-describedby="catagoryHelp">
        <small id="emailHelp" class="form-text text-muted">Something that can have atleast 10 questions.</small>
      </div>
      <div class="form-group">
        <label for="creatorName">Your Name:</label>
        <input type="creator" class="form-control" id="exampleName" aria-describedby="nameHelp">
        <small id="creatorHelp" class="form-text text-muted">Just put in your dumb face name.</small>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-primary">Reset</button>
    </form>

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
      formData: {

      },

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
    },
    handleSubmit () {

    }
  }
}
</script>

<style>

</style>
