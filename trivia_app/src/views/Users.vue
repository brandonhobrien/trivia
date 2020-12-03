<template>
  <div>
    <h1> User Scores </h1>
    <b-table striped hover dark
    :items="users"
    :fields="fields"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    responsive="sm"></b-table>
  </div>
</template>

<script>
import users from '@/data/users'

export default {
  data () {
    return {
      users,
      sortBy: 'name',
      sortDesc: false,
      fields: [
        { key: 'name', sortable: true },
        { key: 'score', sortable: true }
      ]
    }
  }
}
</script>
