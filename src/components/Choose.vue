<template>
  <div>
    <h1>how are you?</h1>
    <app-grid></app-grid>
    <app-toggle></app-toggle>
  </div>
</template>

<script>
  import Grid from './Grid'
  import Toggle from './Toggle'

  export default {
    name: 'choose',
    components: {
      appGrid: Grid,
      appToggle: Toggle
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
