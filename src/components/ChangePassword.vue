<template>
  <div class="container">
    <h2>Change Password</h2>
    <form class="form">
      <div class="fieldset">
        <label class="change-password" for="old-password">old password</label>
        <input
          class="change-password-input"
          type="password"
          id="old-password"
          v-model="old" />
      </div>
  
      <div class="fieldset">
        <label class="change-password" for="new-password">new password</label>
        <input
          class="change-password-input"
          id="new-password"
          type="password"
          v-model="password" />
        <span class="error-message"></span>
      </div>
  
      <div class="fieldset">
        <button @click.prevent="changePassword()">change password</button>
      </div>
    </form>
  
    <div class="error-message"></div>
  </div>
</template>

<script>
  export default {
    name: 'ChangePassword',
    data: function () {
      return {
        old: '',
        password: ''
      }
    },
    methods: {
      closeModal: function () {
        $('.modal').css('display', 'none')
      },
      changePassword: function () {
        this.$store.dispatch('changePassword', {old: this.old, new: this.password})
      }
    }
  }
</script>

<style scoped>
  .container {
    display: inline-block;
    padding: 2rem;
    background: #fff8ea;
  }

  h2 {
    padding-bottom: .75rem;
  }
  .fieldset {
    margin-top: 1rem;
  }

  label {
    display: block;
  }

  .fieldset > * {
    margin-bottom: .5rem;
  }

  .change-password-input {
    padding: .5rem;
    border: 1px solid gray;
  }

  .change-password-input:focus {
    outline: 0;
    border-color: black;
  }

  .error-message {
    display: none;
  }
</style>
