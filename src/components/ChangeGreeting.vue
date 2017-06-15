<template>
  <form>
    <input
        class="change-greeting-input"
        type="text"
        placeholder="change greeting message"
        v-model="greeting"/> 
    <button class="change-greeting-submit" @click.prevent="updateGreeting()">change greeting</button>
  </form>
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
      this
        .$store
        .dispatch(
          'updateGreeting',
          {greeting: this.greeting}
        )
    }
  }
}
</script>

<style scoped>
  .change-greeting-input {
    padding: .5rem;
    border: 1px solid transparent;
    margin-bottom: 1rem;
    font-size: 13px;
    text-align: center;
    width: 300px;
  }

  .change-greeting-input:hover{
    border: 1px solid black;
  }

  .change-greeting-input:focus {
    outline: 0;
  }

  .change-greeting-submit {
    display: block;
    margin: auto;
  }
</style>
