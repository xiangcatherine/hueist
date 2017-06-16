<template>
  <div class="container">
    <div class="history">
      <a class="view-history-link"
        href=""
        @click.prevent="goToMoodHistory()">
        view timeline
      </a>

      <button class="clear-history-button"
        @click.stop.prevent="clearHistory()">
        clear history
      </button>
    </div>

    <div>
      <app-change-password class="app-change-password"></app-change-password>
    </div>

    <div>
      <app-change-greeting class="app-change-greeting"></app-change-greeting>
    </div>
  </div>
</template>

<script>
  import ChangePassword from './ChangePassword'
  import ChangeGreeting from './ChangeGreeting'

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

      clearHistory: function () {
        var token = this.$store.state.user.authToken
        var vm = this

        $.ajax({
          url: 'https://hueist-backend.herokuapp.com/moods',
          type: 'DELETE',
          headers: {
            Authorization: 'Token token=' + token
          },
          success: function () {
            vm.$toaster.success('history cleared')
          },
          error: function () {
            vm.$toaster.error("history couldn't be cleared")
          }
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;
  }

  .container div {
    margin: 0 1rem;
  }

  .history {
    border: 1px solid gray;
    padding: 2rem;
    background: #fadaa1;
  }

  .view-history-link,
  .clear-history-button {
    display: block;
    margin: auto;
  }

  .view-history-link {
    color: #000;
    font-weight: bold;
  }

  .view-history-link:hover,
  .view-history-link:focus,
  .view-history-link:active {
    opacity: .5;
  }

  .clear-history-button {
    margin-top: 2rem;
  }
</style>
