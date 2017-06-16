<template>
  <div class="toggle-container">
    <div class="toggle">
      <radio-button
        class="radio-button"
        name="gridType"
        label="warm"
        :value="currHueType"
        @select="getPalette"/>

      <radio-button
        class="radio-button"
        name="gridType"
        label="neutral"
        :value="currHueType"
        @select="getPalette"/>

      <radio-button
        class="radio-button"
        name="gridType"
        label="cool"
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
        currHueType: 'neutral'
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
    margin: auto;
    width: 200px;
    text-align: center;
  }
  
  .radio-button {
    display: inline;
    padding: 0rem .5rem;
  }
</style>
