import Vue from 'vue'
import App from './App.vue'
import uView from 'uview-ui'
import store from './store'
import api from './api'

Vue.use(uView)
Vue.prototype.$api = api
Vue.config.productionTip = false

new App({ store }).$mount()
