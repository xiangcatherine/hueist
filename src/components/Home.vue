<template>
  <div>
    <div v-if="!isAuthenticated">
      <h2>use color to track your mood</h2>
    </div>
    <template v-if="isAuthenticated">
      <app-choose></app-choose>
    </template>
  </div>
</template>

<script>
import Choose from './Choose'

export default {
  name: 'home',
  components: {
    appChoose: Choose
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  h1 {
    letter-spacing: .5rem;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
  }

  .title {
    margin-left: 20px;
    margin-top: 40px;
  }
</style>
