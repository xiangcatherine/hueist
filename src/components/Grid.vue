<template>
  <div class="grid">
    <template v-for="(color, index) in currPalette">
	    <a
        href=""
        class="gridCell"
        :class="{ selectedCell: isSelected(index) }"
        :id="index"
        :style="{background: color}"
        @click.stop.prevent="setColor" >
      </a>
    </template>
    {{ currSelected }}
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
        },
        currSelected: ''
      }
    },
    computed: {
      currPalette: function () {
        switch (this.hueType) {
          case 'neon':
            this.$emit('colorId', '')
            return this.palette.neon
          case 'norm':
            this.$emit('colorId', '')
            return this.palette.norm
          case 'muted':
            this.$emit('colorId', '')
            return this.palette.muted
        }
      }
    },
    methods: {
      isSelected: function (index) {
        return (this.currSelected === index)
      },
      setColor: function (event) {
        this.currSelected = event.target.id
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

  .gridCell {
  	display: inline-block;
  	width: 28%;
  	height: 28%;
    line-height: 0;
    margin: 2%;
    transition: transform .1s ease;
  }

  .selectedCell {
     transform: rotate(10deg);
  }
</style>
