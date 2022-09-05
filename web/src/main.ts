import { ViteSSG } from 'vite-ssg';
import 'uno.css';
import './style.sass';
import 'virtual:unocss-devtools';
import App from './App.vue';
import routes from './routes';

export const createApp = ViteSSG(
	App,
	{ routes },
);
