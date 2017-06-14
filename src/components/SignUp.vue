<template>
  <div class="modal">
    <form class="form">
      <div class="fieldset">
        <label class="email" for="sign-up-email">email</label>
        <input
          class="sign-up-input"
          type="email"
          id="sign-up-email"
          v-model="email" />
        <span class="error-message"></span>
      </div>

      <div class="fieldset">
        <label class="password" for="sign-up-password">password</label>
        <input
          class="sign-up-input"
          id="sign-up-password"
          type="password"
          v-model="password" />
        <span class="error-message"></span>
      </div>

      <div class="fieldset">
        <label class="password" for="sign-up-password-again">password again</label>
        <input
          class="sign-up-input"
          id="sign-up-password-again"
          type="password"
          v-model="passwordAgain" />
        <span class="error-message"></span>
      </div>

      <div class="fieldset">
        <button @click.prevent="signUp()">sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
  import store from './store.js'

  export default {
    name: 'signUp',
    data: function () {
      return {
        store: store,
        email: '',
        password: '',
        passwordAgain: ''
      }
    },
    methods: {
      apiCall: function () {
        var data = {
          email: this.email,
          password: this.password,
          passwordAgain: this.passwordAgain
        }

        return $.ajax({
          url: 'http://localhost:4741/sign-up',
          method: 'POST',
          data
        })
      },
      signUp: function () {
        this.apiCall()
          .then(console.log('yee'))
          .catch(function (error) {
            console.log('error! it is', error)
          })
      }
    }
  }
</script>

<style scoped>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff8ea;
    padding: 4rem;
  }

  .fieldset + .fieldset {
    margin-top: 2rem;
  }

  .fieldset > * {
    display: block;
    margin-bottom: .5rem;
  }

  .sign-up-input {
    padding: .5rem;
    border: 1px solid transparent;
  }

  .sign-up-input:focus {
    outline: 0;
    border-color: black;
  }

  .error-message {
    display: none;
  }
</style>
