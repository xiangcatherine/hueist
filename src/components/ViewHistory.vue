<template>
  <div class="history">
    <template v-for="color in colors">
      <div class="colorCell" :style="{background: color}"></div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'viewHistory',

    data: function () {
      return {
        moods: ''
      }
    },

    computed: {
      colors: function () {
        var colorArray = []

        for (let i = 0; i < this.moods.length; i++) {
          colorArray.push(this.moods[i].color_value)
        }

        return colorArray
      }
    },

    methods: {
      resizeColors: function () {
        // todo bind new style with calculated width and height to each grid
      }
    },

    beforeMount () {
      var vm = this

      $.ajax({
        url: 'http://localhost:4741/moods',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + this.$store.state.user.authToken
        }
      })
      .then(
        function (response) {
          vm.moods = response.moods
        }
      )
      .catch(
        function () {
          vm.$toaster.error("couldn't load timeline")
        }
      )
    }
  }
</script>

<style scoped>
  .history {
    display: block;
    margin: auto;
    font-size: 0;
    width: calc(100vw-4rem);
    height: calc(100vh - 12rem);
  }

  .colorCell {
    display: inline-block;
    width: 5rem;
    height: 5rem;
  }
</style>
