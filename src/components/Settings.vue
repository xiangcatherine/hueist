<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click.stop.prevent="closeModal">&times;</span>
        <div class="fieldset">
          <button @click.prevent="">change password</button>
        </div>
        <div class="fieldset">
          <button @click.prevent="">view mood history</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
    methods: {
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
      padding: 4rem 6.5rem;
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
