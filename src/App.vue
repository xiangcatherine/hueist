<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  
  export default {
    name: 'app',
    components: {
      appHeader: Header
    }
  }
</script>

<style src="./assets/base.scss" />

<style>
  #app {
    padding: 0 2rem 4rem 2rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #222;
    font-size: 18px;
    letter-spacing: .05 rem;
  }
</style>
