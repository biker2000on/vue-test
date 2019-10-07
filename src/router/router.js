import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import LeafletData from '../components/LeafletData'
import Auth from '../components/Auth'
// import Summary from '../components/Summary'
// import Rides from '../components/Rides'
// import Profile from '../components/Profile'
import HomeWrapper from '../components/HomeWrapper'
import StravaData from '../components/StravaData'
import Buttons from '../components/Buttons'
import ProfileNav from '../components/ProfileNav'
import Error404 from '../components/Error404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tourmap/:mapId', //   /tourmap/:id   and   /tourmap/new for new map
    name: 'map',
    components: {
      default: LeafletData,
      drawer: StravaData,
      header: Buttons,
    },
    props: true
  },
  {
    path: '/tourmap/:mapId/edit', //   /tourmap/:id   and   /tourmap/new for new map
    name: 'edit',
    components: {
      default: LeafletData,
      drawer: StravaData,
      header: Buttons,
    },
    meta: { requiresAuth: true },
    props: true
  },
  {
    path: '/',
    name: 'profile',
    components: {
      default: HomeWrapper,
      drawer: ProfileNav,
    },
    props: true,
    alias: '/profile',
    // meta: { requiresAuth: true }
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
  {
    path: '**',
    component: Error404,
  }
  // {
  //   path: '/summary/:mapId',
  //   name: 'summary',
  //   component: Summary,
  //   props: true,
  // },
  // {
  //   path: '/rides/:mapId',
  //   name: 'rides',
  //   component: Rides,
  //   props: true,
  // },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(() => {
      // if (data && data.signInUserSession) {
      //   user = data;
      // }
      next()
    }).catch(() => {
      next({
        name: 'auth'
      });
    });
  }
  next()
})

export default router