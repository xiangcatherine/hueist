<template>
  <div class="container">
    <a class="view-history-link" href="" @click.prevent="goToMoodHistory()">view mood history</a>
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
      goToMoodHistory: function () {
        this.$router.push({ name: 'viewHistory' })
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
