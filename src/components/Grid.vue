<template>
  <div class="grid">
    <template v-for="(color, id, index) in currPalette">
	    <a
        href=""
        class="gridCell"
        :class="{ selectedCell: isSelected(id) }"
        :id="id"
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
          warm: {
            1: '#C71B20',
            2: '#DA4120',
            3: '#EB6A28',
            4: '#FF9A2D',
            5: '#FCBE2E',
            6: '#FFE025',
            7: '#D21B78',
            8: '#EB1F84',
            9: '#FF5D9F'
          },
          neutral: {
            10: '#C5A0CF',
            11: '#A0A8C9',
            12: '#9ACCC2',
            13: '#B0D4A2',
            14: '#E3DAAB',
            15: '#FADAA1',
            16: '#ECA7B6',
            17: '#E5B1A9',
            18: '#F7CDA3'
          },
          cool: {
            19: '#C130E3',
            20: '#8034DE',
            21: '#3A39ED',
            22: '#3D8AFF',
            23: '#33C4EF',
            24: '#32E3BE',
            25: '#289C18',
            26: '#1FBF43',
            27: '#25D980'
          }
        },
        currSelected: ''
      }
    },
    computed: {
      currPalette: function () {
        switch (this.hueType) {
          case 'warm':
            this.$emit('colorId', '')
            return this.palette.warm
          case 'neutral':
            this.$emit('colorId', '')
            return this.palette.neutral
          case 'cool':
            this.$emit('colorId', '')
            return this.palette.cool
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
    width: 70vmin;
    height: 70vmin;
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

  .gridCell:hover {
    transform: scale(1.1, 1.1);
  }

  .selectedCell {
     transform: scale(.75, .75) !important;
     border-radius: 50%;
  }
</style>
