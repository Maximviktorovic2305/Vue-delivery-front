import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'
import  VueScrollTo  from 'vue-scrollto'
import { createPinia } from 'pinia'

createApp(App)
	.use(router)
	.use(createPinia())
	.use(VueScrollTo, {
		container: 'body',
		duration: 500,
		easing: 'ease-in-out',
		offset: 0,
		force: true,
		cancelable: true,
		onStart: false,
		onDone: false,
		onCancel: false,
		x: false,
		y: true,
	})
	.mount('#app')
