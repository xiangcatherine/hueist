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
            0: '#00EED7',
            1: '#E600F2',
            2: '#00F588',
            3: '#FFFE00',
            4: '#FF7F00',
            5: '#CC00FF',
            6: '#000000',
            7: '#60F500',
            8: '#16F2F2'
          },
          norm: {
            9: '#43AEC9',
            10: '#E064C8',
            11: '#1D9E69',
            12: '#FFC438',
            13: '#E5A953',
            14: '#762BAD',
            15: '#8F8D89',
            16: '#2B6C33',
            17: '#1E1ABD'
          },
          muted: {
            18: '#C7EEE7',
            19: '#FAD4D2',
            20: '#CAE8B1',
            21: '#FAF1A3',
            22: '#FFE5B7',
            23: '#EAD5FA',
            24: '#EDEDED',
            25: '#EDEAD6',
            26: '#B6E4ED'
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
  	width: 58vmin;
  	height: 58vmin;
  	margin: auto;
    font-size: 0;
  }

  .grid-cell {
  	display: inline-block;
  	width: 31%;
  	height: 31%;
    line-height: 0;
    margin: 3px;
  }
</style>
