import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import vueStorage from 'vue-storage'
import router from './router/index.js'
import Normalize from 'normalize.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vueStorage)
Vue.use(VueResource)
Vue.use(Normalize)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App)
})
