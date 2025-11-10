import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue'

const app = createApp(App);

app.component('PageHeader', PageHeader);
app.component('PageFooter', PageFooter);

app.use(router);

app.mount('#app');
