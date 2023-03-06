import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { cloneDeep } from 'lodash-es';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import './assets/scss/global.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
const obj = cloneDeep({});

pinia.use(piniaPluginPersistedstate);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
