import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'

import './assets/scss/main.scss'
 
import { pinia } from '@/store/index'
import router from "@/router";
const app = createApp(App)
 
app.use(pinia)
app.use(router)
app.mount('#app')
