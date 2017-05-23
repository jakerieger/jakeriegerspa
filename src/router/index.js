import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Portfolio from '@/pages/Portfolio'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
    	path: '/',
    	name: 'Home',
    	component: Home
    },
    {
    	path: '/portfolio',
    	name: 'Portfolio',
    	component: Portfolio
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
  ]
})
