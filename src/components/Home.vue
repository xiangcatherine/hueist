<template>
  <div>
    <h1>track your mood<br><br>in full color</h1>
    <div class="jumping-squares">
      <div class="jumping-square one"></div>
      <div class="jumping-square two"></div>
      <div class="jumping-square three"></div>
    </div>
  </div>
</template>

<script>
import Choose from './Choose'

export default {
  name: 'home',
  components: {
    appChoose: Choose
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 3rem;
    text-align: center;
    font-size: 2rem;
    font-weight: normal;
  }

  .jumping-squares {
    width: 40rem;
    margin: auto;
    margin-top: 5rem;
    text-align: center;
  }

  .jumping-square {
    display: inline-block;
    width: 10rem;
    height: 10rem;
    margin: 1rem;
    animation: jumping 1.5s ease 2;
  }

  .one {
    background: #fadaa1;
    animation-delay: .4s;
  }

  .two {
    background: #b0d4a2;
    animation-delay: .2s; 
  }

  .three {
    background: #a0a8c9;
    animation-delay: .6s;
  }

  @keyframes jumping {
    0% { transform: translateY(0rem); }
    70% { transform: translateY(0rem); }
    80% { transform: translateY(-4rem); }  
    90% { transform: translateY(-4rem); }   
    100% { transform: translateY(0rem); }
  }
</style>
