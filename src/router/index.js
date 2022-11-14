import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'


import tournament_home from '../views/tournament/tournament_home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: "/:id",
        name: "registro",
        component: tournament_home,
        props: true,
        beforeRouteUpdate(to, from, next) {
          this.id = to.params.id;
          next();
        },
      },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router