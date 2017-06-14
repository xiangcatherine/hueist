<template>
  <nav>
    <div>    
      <a href="" class="logo">hueist</a>
    </div>

    <div class="right">
      <template v-if="isAuthenticated">
        <a href="" @click.stop.prevent="showSettings">settings</a>
        <a href="" @click.stop.prevent="logOut()">log out</a>
        <app-settings class="settings-modal"></app-settings>
      </template> 
      <template v-if="!isAuthenticated">
        <app-sign-up class="sign-up-modal"></app-sign-up>
        <app-log-in class="log-in-modal"></app-log-in>
        <a href="" class="log-in-link" @click.stop.prevent="showLogIn">log in</a>
        <a href="" class="sign-up-link" @click.stop.prevent="showSignUp">sign up</a>
      </template>
    </div>
  </nav>
</template>

<script>
  import LogIn from './LogIn'
  import SignUp from './SignUp'
  import Settings from './Settings'

  export default {
    components: {
      appLogIn: LogIn,
      appSignUp: SignUp,
      appSettings: Settings
    },
    computed: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      logOut: function () {
        this.$store.dispatch('logOut')
      },
      showSignUp: function () {
        $('.sign-up-modal').css('display', 'block')
      },
      showLogIn: function () {
        $('.log-in-modal').css('display', 'block')
      },
      showSettings: function () {
        $('.settings-modal').css('display', 'block')
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
    opacity: 0.8;
  }

  .right {
    margin-left: auto;
  }

  .logo {
    letter-spacing: .1rem;
    font-size: 20px;
  }

  a {
    color: #222;
    text-decoration: none;
    padding: 1.7rem;
  }

  a:hover,
  a:focus,
  a:active {
    background: #fff8ea;
  }

  .sign-up-modal,
  .log-in-modal,
  .settings-modal {
    display: none;
    margin: auto;
  }

  .log-in-link:hover {
    background: #C8C8A9;
  }

  .sign-up-link:hover {
    background: #83AF9B;
  }
</style>
