require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import App from './components/App.vue'

const app = new Vue({
    el: '#app',
    components: { App },
    router: new VueRouter(routes),
    vuetify: new Vuetify()
})
