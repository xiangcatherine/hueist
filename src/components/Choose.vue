<template>
  <div>
    <h1>how are you?</h1>
    <app-grid v-bind:new-value="newValue"></app-grid>
    <app-toggle @radioToggled="changeGrid"></app-toggle>
  </div>
</template>

<script>
  import Grid from './Grid'
  import Toggle from './Toggle'

  export default {
    name: 'choose',
    data: function () {
      return {
        newValue: this.newValue
      }
    },
    components: {
      appGrid: Grid,
      appToggle: Toggle
    },
    methods: {
      changeGrid: function (newValue) {
        console.log('in changeGrid! new grid value is', newValue)
        this.newValue = newValue
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

