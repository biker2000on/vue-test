import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '../router/router'

Vue.use(VueAnalytics, {
  id: 'UA-97691549-4',
  router
})