import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router"

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');



