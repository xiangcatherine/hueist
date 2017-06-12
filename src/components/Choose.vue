<template>
  <div>
    <h1>how are you?</h1>
    <app-grid></app-grid>
    <app-toggle @radioToggled="changeGrid"></app-toggle>
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
    },
    methods: {
      changeGrid: function (newValue) {
        console.log('in changeGrid! new grid value is', newValue)
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
</style>

