<template>
  <div class="grid">
    <template v-for="row in colorGrid">
      <div class="grid-row">
        <template v-for="color in row">
    	    <div class="grid-cell" :style="{background: color}"></div>
   	    </template>
 	    </div>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colorGrid: [
          ['#ddd', '#ccc', '#ddd'],
          ['#ccc', '#ddd', '#ccc'],
          ['#ddd', '#ccc', '#ddd']
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
