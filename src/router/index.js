import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/main_page.vue'
import mint from '@/pages/mint.vue'
Vue.use(Router)
export default new Router({
	routes: [
		{
			path     : '/',
			name     : 'mainPage',
			component: mainPage
		},
		{
			path     : '/home',
			name     : 'mainPage',
			component: mainPage
		},
		{
			path     : '/mint',
			name     : 'mint',
			component: mint
		}
	]
})
