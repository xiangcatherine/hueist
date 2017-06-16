<template>
	<div class="modal">
    <div class="modal-content">
      <span class="close" @click.stop.prevent="closeModal">&times;</span>
  		<form class="form" id="sign-in-form">
  			<div class="fieldset">
    			<label class="email" for="signin-email">email</label>
   				<input
            class="sign-in-input"
            id="signin-email"
            type="email"
            v-model="email">
  			</div>

  			<div class="fieldset">
  				<label class="password" for="signin-password">password</label>
  				<input
            class="sign-in-input"
            id="signin-password"
            type="password"
            v-model="password">
  			</div>

  			<div class="fieldset">
  				<button @click.prevent="logIn()">log in</button>
  			</div>
  		</form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'logIn',

    data: function () {
      return {
        email: '',
        password: ''
      }
    },

    computed: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      }
    },

    methods: {
      logIn: function () {
        var vm = this

        vm.$store
          .dispatch(
            'logIn',
            { email: this.email, password: this.password }
          )
          .then(
            function (response) {
              vm.$router.push({ name: 'Choose' })
            }
          )
          .then(
            $('.sign-in-input').val('')
          )
          .catch(
            function () {
              vm.$toaster.error('login failed - try again')
            }
          )
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
    padding: 4rem 2rem;
  }

  .modal-content {
    margin: 15% auto;
    border: 1px solid gray;
    padding: 20px;
    background: #fff;
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);
    animation-name: animatetop;
    animation-duration: 0.4s
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

  #signin-email,
  #signin-password {
    padding: .5rem;
    border: 1px solid gray;
  }

  #signin-email:hover,
  #signin-password:hover,
  #signin-email:focus,
  #signin-password:focus {
    outline: 0;
    border-color: black;
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
