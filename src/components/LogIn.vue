<template>
	<div class="modal">
    <div class="modal-content">
      <span class="close" @click.stop.prevent="closeModal">&times;</span>
  		<form class="form">
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
        <span class="error-message"></span>
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

        vm
          .$store
          .dispatch(
            'logIn',
            { email: this.email, password: this.password }
          )
          .then(
            function (response) {
              console.log(response)
              vm.$router.push({ name: 'Choose' })
            }
          )
          .catch(
            function (error) {
              $('.error-message').text('Sorry, try again!')
              console.log('meh pupuru', error)
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
    padding: 4rem;
  }

  .modal-content {
    margin: 15% auto;
    background: #fff8ea;
    padding: 20px;
  /*  border: 1px solid #888;*/
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
  }

  @-webkit-keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
  }

  @keyframes animatetop {
      from {top: -300px; opacity: 0}
      to {top: 0; opacity: 1}
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
    border: 1px solid transparent;
  }

  #signin-email:focus,
  #signin-password:focus{
    outline: 0;
    border-color: black !important;
  }

  .error-message {
    display: none;
  }

  .close {
    color: #aaa;
    float: right;
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
