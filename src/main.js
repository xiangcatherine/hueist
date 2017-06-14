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
      id: ''
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user.authToken !== ''
    },
    getToken (state) {
      return state.user.authToken
    }
  },
  mutations: {
    addWebToken: function (state, data) {
      state.user.authToken = data.user.token
      state.user.id = data.user.id
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
          context.commit('addWebToken', data) // pass the webtoken as payload to the mutation
        },
        error: function (error) {
          console.error(error)
        }
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
          console.log('change password data is', data)
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
