import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import Details from '@/pages/Details.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/details',
				name: 'details',
				component: Details,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
