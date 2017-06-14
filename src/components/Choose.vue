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

    <div>
      <template v-if="chosenColorId">
        <button @click.prevent="createMood()">submit</button><br>
        <input 
          id="note-input"
          class="note-input"
          type="text"
          v-model="note"
          placeholder="add some notes"/>
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
        note: ''
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
      },
      apiCall: function () {
        var data = {
          mood: {
            color_id: this.chosenColorId,
            note: this.note
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

  .note-input {
    padding: .5rem;
    border: 1px solid transparent;
    outline: 0;
    border-color: black;
    display: inline-block;
    margin-top: 10px;
  }
</style>

