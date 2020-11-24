<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Trivia Home</router-link> |
        <router-link to="/Dogs">Dogs</router-link> |
        <router-link to="/UserScores">User Scores</router-link>
      </div>
      <div class="navigation__user">
        User: {{ fullName }}
      </div>
    </nav>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      user: {
        id: 1,
        username: '_bobrien211',
        firstName: 'Brandon',
        lastName: 'OBrien',
        email: 'brandonhobrien@gmail.com',
        idAdmin: true
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 5%;
    background-color: rgb(10, 200, 180, 0.8);
    color: white;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

}

.navigation__logo {
      font-size: 24px;
}

.navigation__user {
}

</style>
