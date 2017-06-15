<template>
  <form :value="chosenColorId">
    <h1 v-if="checkMessage">{{ getMessage }}</h1>
    <h1 v-if="checkMessageNull">how are you?</h1>

    <app-grid
      :hue-type="hueType"
      @colorId="chooseColor">
    </app-grid>

    <app-toggle
      @radioToggled="toggleGrid">
    </app-toggle>

    <div>
      <template v-if="chosenColorId">
        <button @click.prevent="createMood()">submit</button><br>
      </template>
    </div>
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
        chosenColorId: '',
        greeting: ''
      }
    },
    components: {
      appGrid: Grid,
      appToggle: Toggle
    },
    computed: {
      checkMessage () {
        return this.$store.getters.checkMessage
      },
      checkMessageNull () {
        return this.$store.getters.checkMessageNull
      },
      getMessage () {
        return this.$store.getters.getMessage
      }
    },
    methods: {
      toggleGrid: function (hueType) {
        this.hueType = hueType
      },
      chooseColor: function (chosenColorId) {
        this.chosenColorId = chosenColorId
      },
      apiCall: function () {
        var data = {
          mood: {
            color_id: this.chosenColorId
          }
        }

        return $.ajax({
          url: 'http://localhost:4741/moods',
          method: 'POST',
          headers: {
            Authorization: 'Token token=' + this.$store.state.user.authToken
          },
          data
        })
      },
      createMood: function () {
        this.apiCall()
          .then(console.log('mood created successfully'))
          .catch(function (error) {
            console.log('create mood error! it is', error)
          })
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

