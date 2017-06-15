<template>
  <div class="container">
    <a class="view-history-link" href="" @click.prevent="goToMoodHistory()">view mood history</a>
    <app-change-password class="app-change-password"></app-change-password>
    <a class="clear-history-link" href="" @click.stop.prevent="clearHistory()">clear mood history</a>
    <app-change-greeting class="app-change-greeting"></app-change-greeting>
  </div>
</template>

<script>
  import ChangePassword from './ChangePassword'
  import ChangeGreeting from './ChangeGreeting'
  // import store from '../main.js'

  export default {
    name: 'Settings',
    components: {
      appChangePassword: ChangePassword,
      appChangeGreeting: ChangeGreeting
    },
    data: function () {
      return {
        old: '',
        password: ''
      }
    },
    methods: {
      goToMoodHistory: function () {
        this.$router.push({ name: 'viewHistory' })
      },
      apiCall: function () {
        var token = this.$store.state.user.authToken
        return $.ajax({
          url: 'http://localhost:4741/moods',
          type: 'DELETE',
          headers: {
            Authorization: 'Token token=' + token
          }
        })
      },
      clearHistory: function () {
        this.apiCall()
          .then(console.log('moods deleted successfully'))
          .catch(function (error) {
            console.error(error)
            console.log('at error catch for clear history')
          })
      }
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .view-history-link,
  .clear-history-link {
    display: block;
  }

  .app-change-password {
    margin-top: 2rem;
  }
  
  .app-change-greeting {
    margin-top: 2rem;
  }

</style>
