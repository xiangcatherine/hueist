<template>
  <div class="container">
    <a class="view-history-link" href="" @click.prevent="getMoodHistory()">view mood history</a>
    <app-change-password class="app-change-password"></app-change-password>
  </div>
</template>

<script>
import ChangePassword from './ChangePassword'

export default {
  name: 'Settings',
  components: {
    appChangePassword: ChangePassword
  },
  data: function () {
    return {
      old: '',
      password: ''
    }
  },
  methods: {
    apiCall: function () {
      return $.ajax({
        url: 'http://localhost:4741/moods',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + this.$store.state.user.authToken
        }
      })
    },
    getMoodHistory: function () {
      this.apiCall()
        .then(this.getMoodHistorySuccess)
        .catch(function (error) {
          console.error('could not get mood history', error)
        })
    },
    getMoodHistorySuccess: function (response) {
      console.log('get mood history response is', response)
    }
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .view-history-link {
    display: block;
  }

  .app-change-password {
    margin-top: 2rem;
  }

</style>
