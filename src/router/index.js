import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	children:[
		{
			path:'/business',
			name:'/business',
			component: resolve => require(['../views/business.vue'], resolve),
		}
	]
  },

]

const router = new VueRouter({
  routes
})

export default router
