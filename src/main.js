import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router/index'

const app = createApp(App)
app.use(router) // <-- Fix typo here
app.use(createPinia())
app.mount('#app')
