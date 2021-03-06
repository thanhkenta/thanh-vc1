// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//sd Vuex trong store.js             để sd import
import {store} from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //taoj store theo vuex
  store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
