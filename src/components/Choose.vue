<template>
  <form :value="chosenColorId">
    <h1>how are you?</h1>

    <app-grid
      :hue-type="hueType"
      @colorId="chooseColor">
    </app-grid>

    <app-toggle
      @radioToggled="toggleGrid">
    </app-toggle>

    <template v-if="chosenColorId">
      <button type="submit">Submit</button>
    </template>
  </form>
</template>

<script>
  import Grid from './Grid'
  import Toggle from './Toggle'

  export default {
    name: 'choose',
    data: function () {
      return {
        hueType: 'norm',
        chosenColorId: ''
      }
    },
    components: {
      appGrid: Grid,
      appToggle: Toggle
    },
    methods: {
      toggleGrid: function (hueType) {
        this.hueType = hueType
      },
      chooseColor: function (chosenColorId) {
        this.chosenColorId = chosenColorId
      }
    }
  }
</script>

<style scoped>
  form {
    text-align: center;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 2rem;
  }
</style>

