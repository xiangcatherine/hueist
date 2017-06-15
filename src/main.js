import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

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
      console.log('what is data', data)
    }
  },
  actions: {
    logIn: function (context, userInput) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: 'http://localhost:4741/sign-in',
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
          url: 'http://localhost:4741/users/' + context.state.user.id + '/change-greeting',
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
            console.log(data)
            resolve(data)
          },
          error: function (reason) {
            reject(reason)
            console.log(reason)
          }
        })
      })
    },
    changePassword: function (context, userInput) {
      console.log(userInput)
      $.ajax({
        url: ('http://localhost:4741/change-password/' + context.state.user.id),
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
          console.log('change pw successful')
        },
        error: function (error) {
          console.error(error)
        }
      })
    },
    logOut: function (context) {
      $.ajax({
        url: ('http://localhost:4741/sign-out/' + context.state.user.id),
        type: 'DELETE',
        headers: {
          Authorization: 'Token token=' + context.state.user.authToken
        },
        success: function () {
          console.log('log out successful')
          context.commit('removeWebToken')
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
  components: { App },
  store
})
