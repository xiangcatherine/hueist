<template>
  <form>
    <input
        class="change-greeting-input"
        type="text"
        placeholder="change greeting message"
        v-model="greeting"/> 
    <button class="change-greeting-submit" @click.prevent="updateGreeting()">change greeting</button>
  </form>
</template>

<script>
export default {
  name: 'ChangeGreeting',
  data: function () {
    return {
      greeting: ''
    }
  },
  methods: {
    apiCall: function () {
      var data = {
        user: {
          greeting: this.greeting
        }
      }
      return $.ajax({
        url: 'http://localhost:4741/users/' + this.$store.state.user.id + '/change-greeting',
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + this.$store.state.user.authToken
        },
        data
      })
    },
    updateGreeting: function () {
      this.apiCall()
        .then(
          console.log('greeting updated successfully!'),
          )
        .catch(function (error) {
          console.error('greeting not updated', error)
        })
    }
  }
}
</script>

<style scoped>
  .change-greeting-input {
    padding: .5rem;
    border: 1px solid transparent;
    margin-bottom: 1rem;
    font-size: 13px;
    text-align: center;
    width: 300px;
  }

  .change-greeting-input:hover{
    border: 1px solid black;
  }

  .change-greeting-input:focus {
    outline: 0;
  }

  .change-greeting-submit {
    display: block;
    margin: auto;
  }
</style>
