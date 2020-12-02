<template>
  <div>
    <h1> User Scores </h1>
    <b-table striped hover dark :items="users"></b-table>
  </div>
</template>

<script>
import users from '@/data/users'

export default {
  data () {
    return {
      users
    }
  }
}
</script>
