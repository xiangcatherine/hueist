<template>
  <div>
    <div v-if="!isAuthenticated">
      <h2>use color to track your mood</h2>
    </div>
    <template>
      <app-choose v-if="isAuthenticated"></app-choose>
    </template>
  </div>
</template>

<script>
import Choose from './Choose'
import store from '../main.js'

export default {
  name: 'home',
  components: {
    appChoose: Choose
  },
  computed: {
    isAuthenticated () {
      return store.getters.isAuthenticated
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
