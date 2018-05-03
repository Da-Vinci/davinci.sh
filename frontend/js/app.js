import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import routes from './routes';
import Navbar from './components/Navbar';

Vue.use(VueRouter);
Vue.use(VueMeta);

Vue.component('navbar', Navbar);

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes
});

const app = new Vue({
	router,
	metaInfo: {
		titleTemplate: '%s - Da Vinci',
	}
});

app.$mount('#app');