<template>
  <div class="toggle-container">
    <div class="toggle">
      <radio-button
        class="radio-button"
        name="gridType"
        label="neon"
        :value="currHueType"
        @select="getPalette"/>

      <radio-button
        class="radio-button"
        name="gridType"
        label="norm"
        :value="currHueType"
        @select="getPalette"/>

      <radio-button
        class="radio-button"
        name="gridType"
        label="muted"
        :value="currHueType"
        @select="getPalette"/>

    </div>
  </div>
</template>

<script>
  import RadioButton from './RadioButton'

  export default {
    name: 'toggle',
    components: {
      radioButton: RadioButton
    },
    data: function () {
      return {
        currHueType: 'norm'
      }
    },
    methods: {
      getPalette: function (hueType) {
        this.currHueType = hueType
        this.$emit('radioToggled', hueType)
      }
    }
  }
</script>

<style scoped>
  .toggle {
    padding: 2rem;
    margin: auto;
    width: 55vmin;
    text-align: center;
  }
  
  .radio-button {
    display: inline;
    padding: 1.5rem;
  }
</style>
