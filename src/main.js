import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import store from './stores';

const app = createApp(App);
app.use(store).use(router).mount('#app');
