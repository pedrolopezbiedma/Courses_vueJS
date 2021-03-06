import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

var app = null
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

