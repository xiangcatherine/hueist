<template>
  <span>{{newValue}}</span>
<!--   <form class="grid">
    <template v-for="row in newValue">
      <div class="grid-row">
        <template v-for="color in row">
    	    <input class="grid-cell" :style="{background: color}"></input>
   	    </template>
 	    </div>
    </template>
  </form> -->
</template>

<script>
  export default {
    name: 'grid',
    props: ['newValue'],
    data: function () {
      return {
        // paletteName: this.newValue,
        'neon': [
          ['blue', 'red', 'blue'],
          ['red', 'blue', 'red'],
          ['blue', 'red', 'blue']
        ],
        'norm': [
          ['#ddd', '#ccc', '#ddd'],
          ['#ccc', '#ddd', '#ccc'],
          ['#ddd', '#ccc', '#ddd']
        ],
        'muted': [
          ['pink', 'yellow', 'pink'],
          ['yellow', 'pink', 'yellow'],
          ['pink', 'yellow', 'pink']
        ]
      }
    }
  }
</script>

<style scoped>
  .grid {
  	width: 55vmin;
  	height: 55vmin;
  	margin: auto;
  }

  .grid-row {
  	width: 100%;
  	height: 33%;
  }

  .grid-cell {
  	display: inline-block;
  	width: 33%;
  	height: 100%;
  }
</style>
