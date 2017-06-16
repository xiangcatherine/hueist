import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

import Toaster from 'v-toaster'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Toaster, {timeout: 2000})

const store = new Vuex.Store({
  state: {
    user: {
      email: '',
      authToken: '',
      id: '',
      greeting: ''
    }
  },

  getters: {
    isAuthenticated (state) {
      return state.user.authToken !== ''
    },
    getToken (state) {
      return state.user.authToken
    },
    checkMessage (state) {
      return state.user.greeting !== ''
    },
    checkMessageNull (state) {
      return state.user.greeting == null
    },
    getMessage (state) {
      return state.user.greeting
    }
  },

  mutations: {
    addWebToken: function (state, data) {
      state.user.authToken = data.user.token
      state.user.id = data.user.id
      state.user.greeting = data.user.greeting
    },
    removeWebToken: function (state) {
      state.user.authToken = ''
    },
    changeMessage: function (state, data) {
      state.user.greeting = data.user.greeting
    }
  },

  actions: {
    logIn: function (context, userInput) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: 'https://hueist-backend.herokuapp.com/sign-in',
          type: 'POST',
          data: {
            email: userInput.email,
            password: userInput.password
          },
          success: function (data) {
            context.commit('addWebToken', data)
            resolve(data)
          },
          error: function (reason) {
            reject(reason)
          }
        })
      })
    },

    updateGreeting: function (context, userInput) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: 'https://hueist-backend.herokuapp.com/users/' + context.state.user.id + '/change-greeting',
          type: 'PATCH',
          headers: {
            Authorization: 'Token token=' + context.state.user.authToken
          },
          data: {
            user: {
              greeting: userInput.greeting
            }
          },
          success: function (data) {
            context.commit('changeMessage', data)
            resolve(data)
          },
          error: function (reason) {
            reject(reason)
          }
        })
      })
    },

    changePassword: function (context, userInput) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: ('https://hueist-backend.herokuapp.com/change-password/' + context.state.user.id),
          type: 'PATCH',
          data: {
            passwords: {
              old: userInput.old,
              new: userInput.new
            }
          },
          headers: {
            Authorization: 'Token token=' + context.state.user.authToken
          },
          success: function (data) {
            resolve(data)
          },
          error: function (reason) {
            reject(reason)
          }
        })
      })
    },

    logOut: function (context) {
      $.ajax({
        url: ('https://hueist-backend.herokuapp.com/sign-out/' + context.state.user.id),
        type: 'DELETE',
        headers: {
          Authorization: 'Token token=' + context.state.user.authToken
        },
        success: function () {
          context.commit('removeWebToken')
        },
        error: function () {
          context.commit('removeWebToken')
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
  components: { App },
  store
})
