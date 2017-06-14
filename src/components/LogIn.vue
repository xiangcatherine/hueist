<template>
	<div class="modal">
		<form class="form">
			<div class="fieldset">
  			<label class="email" for="signin-email">email</label>
 				<input id="signin-email" type="email" placeholder="email" v-model="email">
				<span class="error-message"></span>
			</div>

			<div class="fieldset">
				<label class="password" for="signin-password">password</label>
				<input id="signin-password" type="text" placeholder="password" v-model="password">
				<span class="error-message"></span>
			</div>

			<div class="fieldset">
				<button @submit="login()" type="submit">login</button>
			</div>
		</form>
  </div>
</template>

<script>
  import store from './store.js'

  export default {
    name: 'logIn',
    data: function () {
      return {
        store: store,
        email: '',
        password: ''
      }
    },
    computed: {
    },
    methods: {
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
</style>
