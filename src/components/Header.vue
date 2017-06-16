<template>
  <nav>
    <div>    
      <transition name="fade">
        <a href="" @click.stop.prevent="$router.push('Choose')" class="logo">hueist</a>
      </transition>
    </div>

    <div class="right">
      <template v-if="isAuthenticated">
        <a href="" @click.stop.prevent="goToSettings()" class="settings-link">settings</a>
        <a href="" @click.stop.prevent="logOut()" class="log-out-link">log out</a>
      </template> 
      <template v-if="!isAuthenticated">
        <app-sign-up class="sign-up-modal"></app-sign-up>
        <app-log-in class="log-in-modal"></app-log-in>
        <a href="" class="sign-up-link" @click.stop.prevent="showSignUp">sign up</a>
        <a href="" class="log-in-link" @click.stop.prevent="showLogIn">log in</a>
      </template>
    </div>
  </nav>
</template>

<script>
  import LogIn from './LogIn'
  import SignUp from './SignUp'

  export default {
    components: {
      appLogIn: LogIn,
      appSignUp: SignUp
    },
    computed: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      logOut: function () {
        this.$store.dispatch('logOut')
        this.$router.push({ name: 'Home' })
      },
      showSignUp: function () {
        $('.sign-up-modal').css('display', 'block')
      },
      showLogIn: function () {
        $('.log-in-modal').css('display', 'block')
      },
      goToSettings: function () {
        this.$router.push({ name: 'Settings' })
      }
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 1rem;
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

  .logo:hover {
    background: #fadaa1;
  }

  .sign-up-link:hover,
  .settings-link:hover {
    background: #b0d4a2;
  }

  .log-in-link:hover,
  .log-out-link:hover {
    background: #a0a8c9;
  }

  .sign-up-modal,
  .log-in-modal {
    display: none;
    margin: auto;
  }
</style>
