// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Vuelazyload from 'vue-lazyload'
import store from './store'

Vue.use(ViewUI)
Vue.config.productionTip = false

Vue.use(Vuelazyload,{
  loading:require('./assets/img/loading.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
