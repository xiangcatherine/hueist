<template>
  <div class="grid">
    <template v-for="(color, index) in currPalette">
	    <a
        href=""
        class="grid-cell"
        :id="index"        
        :style="{background: color}"
        @click.stop.prevent="setColor" >
      </a>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    props: [
      'hueType'
    ],
    data: function () {
      return {
        palette: {
          neon: {
            0: 'blue',
            1: 'orange',
            2: 'blue',
            3: 'orange',
            4: 'blue',
            5: 'orange',
            6: 'blue',
            7: 'orange',
            8: 'blue'
          },
          norm: {
            9: '#ddd',
            10: '#ccc',
            11: '#ddd',
            12: '#ccc',
            13: '#ddd',
            14: '#ccc',
            15: '#ddd',
            16: '#ccc',
            17: '#ddd'
          },
          muted: {
            18: 'pink',
            19: 'yellow',
            20: 'pink',
            21: 'yellow',
            22: 'pink',
            23: 'yellow',
            24: 'pink',
            25: 'yellow',
            26: 'pink'
          }
        }
      }
    },
    computed: {
      currPalette: function () {
        switch (this.hueType) {
          case 'neon':
            return this.palette.neon
          case 'norm':
            return this.palette.norm
          case 'muted':
            return this.palette.muted
        }
      }
    },
    methods: {
      setColor: function (event) {
        this.$emit('colorId', event.target.id)
      }
    }
  }
</script>

<style scoped>
  .grid {
  	width: 55vmin;
  	height: 55vmin;
  	margin: auto;
    font-size: 0;
  }

  .grid-cell {
  	display: inline-block;
  	width: 33%;
  	height: 33%;
    line-height: 0;
  }
</style>
