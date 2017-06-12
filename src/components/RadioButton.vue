<template>
  <div>
    <input
      type="radio"
      :name="name"
      :value="label"
      v-model="paletteValue"
    >
  </div>
</template>

<script>
  export default {
    name: 'radio-button',
    props: [
      'name',
      'label',
      'value'
    ],
    computed: {
      paletteValue: {
        get: function () {
          return this.value
        },
        set: function () {
          this.$emit('select', this.label)
        }
      }
    }
  }
</script>

<style scoped>
  input {
  	display: inline;
  }
</style>
