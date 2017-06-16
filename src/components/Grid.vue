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
            0: '#C71B20',
            1: '#DA4120',
            2: '#EB6A28',
            3: '#FF9A2D',
            4: '#FCBE2E',
            5: '#FFE025',
            6: '#D21B78',
            7: '#EB1F84',
            8: '#FF5D9F'
          },
          neutral: {
            0: '#C5A0CF',
            1: '#A0A8C9',
            2: '#9ACCC2',
            3: '#B0D4A2',
            4: '#E3DAAB',
            5: '#FADAA1',
            6: '#ECA7B6',
            7: '#E5B1A9',
            8: '#F7CDA3'
          },
          cool: {
            0: '#C130E3',
            1: '#8034DE',
            2: '#3A39ED',
            3: '#3D8AFF',
            4: '#33C4EF',
            5: '#32E3BE',
            6: '#289C18',
            7: '#1FBF43',
            8: '#25D980'
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
