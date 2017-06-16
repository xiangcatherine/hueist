<template>
  <div class="container">
    <h2>change greeting</h2>
    <form>
      <input
        class="change-greeting-input"
        type="text"
        placeholder="the world is your oyster"
        v-model="greeting"/>

      <button class="change-greeting-submit" @click.prevent="updateGreeting()">
        do it
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChangeGreeting',
  data: function () {
    return {
      greeting: ''
    }
  },
  methods: {
    updateGreeting: function () {
      var vm = this

      vm.$store
        .dispatch(
          'updateGreeting',
          {greeting: this.greeting}
        )
        .then(
          function () {
            vm.$toaster.success('gretting updated')
          }
        )
        .catch(
          function () {
            vm.$toaster.error("greeting couldn't be updated")
          }
        )
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 2rem;
    background: #fff8ea;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .change-greeting-input {
    padding: .5rem;
    border: 1px solid gray;
    margin-bottom: 1rem;
    font-size: 13px;
    text-align: center;
    width: 200px;
  }

  .change-greeting-input:hover,
  .change-greeting-input:focus {
    border-color: black;
    outline: 0;
  }

  .change-greeting-submit {
    display: block;
    margin: auto;
  }
</style>
