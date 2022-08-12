import { createApp } from 'vue';
import Router from './core/router/router';

import './assets/style.scss';
import App from './App.vue';

createApp(App).use(Router).mount('#root');
