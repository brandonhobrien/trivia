import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

createApp(App).use(store).use(router).use(BootstrapVue).mount('#app')
