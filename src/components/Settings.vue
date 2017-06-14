<form id="change-password" class="hidden">
      <fieldset>
        <input type="password" name="passwords[old]" placeholder="old password">
        <input type="password" name="passwords[new]" placeholder="new password">
        <button type="submit" name="submit" value="change password">submit</button>
      </fieldset>
    </form>
    <div class="change-pwd-success hidden"></div>
    <div class="change-pwd-error hidden"></div>

<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click.stop.prevent="closeModal">&times;</span>
        <div class="fieldset">
          <button @click.prevent="">view mood history</button>
        </div>
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
  </div>
</template>

<script>
  export default {
    name: 'Settings',
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
  .modal {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4rem 7rem;
    }

    .modal-content {
      margin: 15% auto;
      background: #fff8ea;
      padding: 20px;
/*      border: 1px solid #888;*/
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
