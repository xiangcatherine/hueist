<template>
  <div class="toggle-container">
    <form class="toggle">
      <radio-button class="radio-button" name="gridType" label="neon" :value="selectedValue" @change="getPalette"/>
      <radio-button class="radio-button" name="gridType" label="norm" :value="selectedValue" @change="getPalette"/>
      <radio-button class="radio-button" name="gridType" label="muted" :value="selectedValue" @change="getPalette"/>
    </form>
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
        selectedValue: 'norm'
      }
    },
    methods: {
      getPalette: function (newValue) {
        this.selectedValue = newValue
        console.log('selection is', newValue)
        this.$emit('radioToggled', newValue)
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
