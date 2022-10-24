import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'sweetalert2/dist/sweetalert2.min.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from 'axios'
Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true
});

const HTTP = axios.create({
  // baseURL: 'http://localhost:8080/api/'
    baseURL: 'https://holu.pro/api/'
  })


Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
