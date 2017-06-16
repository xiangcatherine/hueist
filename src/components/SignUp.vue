<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click.stop.prevent="closeModal">&times;</span>
      <form class="form">
        <div class="fieldset">
          <label class="email" for="sign-up-email">email</label>
          <input
            class="sign-up-input"
            type="email"
            id="sign-up-email"
            v-model="email" />
        </div>

        <div class="fieldset">
          <label class="password" for="sign-up-password">password</label>
          <input
            class="sign-up-input"
            id="sign-up-password"
            type="password"
            v-model="password" />
        </div>

        <div class="fieldset">
          <label class="password" for="sign-up-password-again">password again</label>
          <input
            class="sign-up-input"
            id="sign-up-password-again"
            type="password"
            v-model="passwordAgain" />
        </div>

        <div class="fieldset" >
          <button v-if="doPasswordsMatch && checkforPassword" @click.prevent="signUp()">sign up</button>
        </div>
        <span class="error-message"></span>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signUp',
    data: function () {
      return {
        email: '',
        password: '',
        passwordAgain: ''
      }
    },
    computed: {
      doPasswordsMatch () {
        return this.password === this.passwordAgain
      },
      checkforPassword () {
        return this.password.length > 0 && this.passwordAgain.length > 0
      }
    },
    methods: {
      signUp: function () {
        var data = {
          email: this.email,
          password: this.password,
          passwordAgain: this.passwordAgain
        }

        var vm = this

        $.ajax({
          url: 'http://localhost:4741/sign-up',
          method: 'POST',
          data,
          success: function () {
            vm.closeModal()
          },
          error: function () {
            vm.$toaster.error('sign up invalid - try again')
          }
        })
      },

      closeModal: function () {
        $('.modal').css('display', 'none')
      }
    }
  }
</script>

<style scoped>
  .modal {
    position: absolute;
    top: 0;
    right: 0;
    padding: 4rem;
  }

  .modal-content {
    margin: 2rem auto;
    padding: 20px;
    border: 1px solid gray;
    background: #fff;
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);
    animation-name: animatetop;
    animation-duration: 0.2s;
  }

  @keyframes animatetop {
    from { top: -300px; opacity: 0 }
    to { top: 0; opacity: 1 }
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
    border: 1px solid gray;
  }

  .sign-up-input:hover,
  .sign-up-input:focus {
    outline: 0;
    border-color: black;
  }

  .error-message {
    display: none;
  }

  .close {
    color: #aaa;
    float: right;
    margin-top: -12px;
    margin-right: -12px;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
