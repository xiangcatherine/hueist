<template>
  <a href="" @click.prevent="getMoodHistory()">view mood history</a>
</template>

<script>
  export default {
    name: 'viewHistory',
    data: function () {
      return {
        colors: [] // probably want to loop through response array and push the color ids here?
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
  h1 {
    text-align: center;
  }
</style>
