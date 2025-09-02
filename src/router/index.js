import { createRouter, createWebHashHistory } from 'vue-router'

import home from '@/pages/home'
import login from '@/pages/login/login'
import mainpage from '@/components/mainPage'

import userlist from '@/pages/main/userlist'
import gamelist from '@/pages/main/gamelist'

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
			path: '/userlist',
			component: userlist,
			meta: ['用户列表'],
		},{
			path: '/gamelist',
			component: userlist,
			meta: ['游戏列表'],
		}
	]},

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
