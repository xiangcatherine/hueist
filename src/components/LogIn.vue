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
  				<span class="error-message"></span>
  			</div>

  			<div class="fieldset">
  				<label class="password" for="signin-password">password</label>
  				<input
            class="sign-in-input"
            id="signin-password"
            type="password"
            v-model="password">
  				<span class="error-message"></span>
  			</div>

  			<div class="fieldset">
  				<button @click.prevent="logIn()">log in</button>
  			</div>
  		</form>
    </div>
  </div>
</template>

<script>
  import store from '../main.js'

  export default {
    name: 'logIn',
    data: function () {
      return {
        store: store,
        email: '',
        password: ''
      }
    },
    methods: {
      logIn: function () {
        this.store.dispatch('logIn', {email: this.email, password: this.password})
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
    padding: 3rem;
  }

  .modal-content {
    margin: 15% auto;
    background: #fff8ea;
    padding: 20px;
    border: 1px solid #888;
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
