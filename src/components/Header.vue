<template>
  <nav>
    <div>    
      <a href="" class="logo">hueist</a>
    </div>

    <div class="right">
      <template v-if="authenticated">
        <a href="">settings</a>
      </template> 
      <template v-else>
        <app-sign-up></app-sign-up>
        <a href="">log in</a>
        <a href="">sign up</a>
      </template>
    </div>
  </nav>
</template>

<script>
  import LogIn from './LogIn'
  import SignUp from './SignUp'

  export default {
    data: function () {
      return {
        authenticated: false
      }
    },
    components: {
      appLogIn: LogIn,
      appSignUp: SignUp
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 2rem;
  }

  .right {
    margin-left: auto;
  }

  a {
    color: #222;
    text-decoration: none;
    padding: 2rem 1.5rem;
  }

  a:hover,
  a:focus,
  a:active {
    background: #fff8ea;
  }
</style>
