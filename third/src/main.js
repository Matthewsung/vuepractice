import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import store from './store'

createApp(App).use(store).use(Router).mount('#app')
