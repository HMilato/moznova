import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import 'popper.js';
import './assets/app.scss';
import {fb} from './firebase';
import VueFirestore from 'vue-firestore'

require('firebase/firestore/bundle')
//require('firebase/firestore')

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})


Vue.use(VueFirestore)

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component("Hero", require('./components/Hero.vue').default);
Vue.component("cursos", require('./sections/cursos.vue').default);

import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;


Vue.config.productionTip = false

//bootstrapvue

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

let app = ''

fb.auth().onAuthStateChanged(function(user){

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')

    user
  }
})


