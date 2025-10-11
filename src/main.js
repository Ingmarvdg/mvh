import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PageHeader from './components/PageHeader.vue';

const app = createApp(App);

app.component('PageHeader', PageHeader);

app.use(router);

app.mount('#app');
