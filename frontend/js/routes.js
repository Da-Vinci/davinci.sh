import Home from './components/pages/Home.vue';
import Projects from './components/pages/Projects.vue';

export default [
	{
		name: 'home',
		path: '/',
		component: Home,
	}, {
		name: 'projects',
		path: '/projects',
		component: Projects,
	}
];