<template>
  <form :value="chosenColorId">
    <div class="inline">
      <app-grid
        :hue-type="hueType"
        @colorId="chooseColor">
      </app-grid>
    </div>

    <div class="inline message">
      <h1 v-if="checkMessage">{{ getMessage }}</h1>
      <h1 v-if="checkMessageNull">how are you?</h1>

      <app-toggle
        @radioToggled="toggleGrid">
      </app-toggle>

      <div>
        <button @click.prevent="createMood()" :class="{visible: chosenColorId}">submit</button><br>
      </div>
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
        hueType: 'neutral',
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

      createMood: function () {
        var data = {
          mood: {color_id: this.chosenColorId}
        }

        var vm = this

        $.ajax({
          url: 'http://localhost:4741/moods',
          method: 'POST',
          headers: {
            Authorization: 'Token token=' + this.$store.state.user.authToken
          },
          data,
          success: function () {
            vm.$toaster.success('nice')
          },
          error: function () {
            vm.$toaster.error("couldn't save mood - try again")
          }
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
    margin-bottom: 2rem;
  }

  .inline {
    display: inline-block;
    vertical-align: top;
  }

  button {
    margin-top: 2rem;
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }

  .message {
    width: 300px;
    padding: 2rem 0;
  }
</style>

