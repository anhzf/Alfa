import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
	{
		path: '/',
		name: 'Home',
		component: async () => import('./pages/IndexPage.vue'),
	},
];
