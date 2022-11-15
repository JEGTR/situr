import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";

import './styles/styles.scss'
import './styles/carousel.css'
import 'bootstrap'


createApp(App)
    .use(router)
    .mount('#app')
