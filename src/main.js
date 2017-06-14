// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      loggedInStatus: true,
      authToken: ''
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user.authToken != null
    }
  },
  mutations: {
    addWebToken: function (state, webToken) {
      state.user.authToken = webToken
    },
    removeWebToken: function (state) {
      state.user.authToken = ''
    }
  },
  actions: {
    logIn: function (context, userInput) {
      $.ajax({
        url: 'http://localhost:4741/sign-in',
        type: 'POST',
        data: {
          email: userInput.email,
          password: userInput.password
        },
        success: function (data) {
          console.log('success, sign in data is', data)
          context.commit('addWebToken', this.webToken) // pass the webtoken as payload to the mutation
        },
        error: function (error) {
          console.error(error)
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
