import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";

import './styles/styles.scss'
import './styles/carousel.css'
import 'bootstrap'
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2dvbWV6dCIsImEiOiJjbGFuNHhyeHAwamZwM25xdGlsYXdmNHYzIn0.XHCg5OeAP43l5fDJQKvekA';


createApp(App)
    .use(router)
    .mount('#app')
