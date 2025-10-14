import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

// Create and use Pinia FIRST, so all stores are active before routing
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

