import Vue from 'vue'
import App from './App.vue'
import uView from 'uview-ui'
import store from './store'
import apiUrlConfig from '@/lib/globalconfig/ApiUrlConfig'
// import axios from 'axios'
import api from './api'
Vue.use(uView)
// Vue.use(axios)
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.prototype.ApiUrlConfig = apiUrlConfig

new App({ store }).$mount()
