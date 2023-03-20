import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import router from './router'
import storeConfig from './store'
const store = createStore(storeConfig)


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
