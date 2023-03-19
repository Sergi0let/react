import { createApp } from 'vue';
import App from './App.vue';

import routers from './routes';

import './assets/main.scss';

const app = createApp(App);

app.use(routers);

app.mount('#app');
