import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
	{
		path: '/',
		name: 'Home',
		component: async () => import('./pages/IndexPage.vue'),
	},
	{
		path: '/katalog',
		name: 'Catalogue',
		component: async () => import('./pages/CataloguePage.vue'),
	},
	{
		path: '/katalog/:productId',
		name: 'Product',
		component: async () => import('./pages/ProductPage.vue'),
	},
	{
		path: '/tentang',
		name: 'About',
		component: async () => import('./pages/AboutPage.vue'),
	},
];
