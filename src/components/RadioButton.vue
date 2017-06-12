<template>
  <div>
    <input type="radio" :name="name" :value="label" v-model="paletteValue">
  </div>
</template>

<script>
  export default {
    name: 'radio-button',
    props: ['name', 'label', 'value'],
    computed: {
      paletteValue: {
        get: function () {
          return this.value
        },
        // communicating to parent so that selectedValue can update accordingly
        set: function () {
          this.$emit('change', this.label)
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
