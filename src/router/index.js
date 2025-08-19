import { createRouter, createWebHashHistory } from 'vue-router'

import home from '@/pages/home'
import login from '@/pages/login/login'
import mainpage from '@/components/mainPage'

import activitylist from '@/pages/main/activitylist'

const routes = [
	{
		path: '/',
		component: login
	},{
		path: '/login',
		component: login
	},
	{
		path: '/mainpage',
		component: mainpage,
		name: '',
		children: [{
			path: '',
			component: home,
		},{
			path: '/home',
			component: home,
		},{
			path: '/activitylist',
			component: activitylist,
			meta: ['环境变量列表'],
		}
	]},

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
