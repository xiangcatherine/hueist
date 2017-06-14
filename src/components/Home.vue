<template>
  <div>
    <div v-if="!isAuthenticated">
      <h1>use color to track your mood</h1>
    </div>
    <transition name="fade">
      <template v-if="isAuthenticated">
        <app-choose></app-choose>
      </template>
    </transition>
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
  h1 {
    font-weight: normal;
    text-align: center;
    margin-top: 20px;
  }

  .title {
    margin-left: 20px;
    margin-top: 40px;
  }
</style>
