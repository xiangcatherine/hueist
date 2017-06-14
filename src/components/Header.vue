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
        <app-sign-up class="sign-up-modal"></app-sign-up>
        <app-log-in class="log-in-modal"></app-log-in>
        <a href="" @click.stop.prevent="showLogIn">log in</a>
        <a href="" @click.stop.prevent="showSignUp">sign up</a>
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
    },
    methods: {
      showSignUp: function () {
        $('.sign-up-modal').css('display', 'block')
      },
      showLogIn: function () {
        $('.log-in-modal').css('display', 'block')
      }
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

  .sign-up-modal,
  .log-in-modal {
    display: none;
    margin: auto;
  }
</style>
