import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store({
  state: {
    token: '',
    netWork: true,
    PhoneChecked: true,
    phone: ''
  },
  mutations: {
    loginSuccess(state, token: string) {
      state.token = token
    },
    changeNetwork(state, status: boolean) {
      state.netWork = status
    },
    phoneCheck(state) {
      state.PhoneChecked = false
    },
    changePhone(state, phone) {
      state.phone = phone
    }
  }
})
