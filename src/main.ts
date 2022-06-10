import { createApp } from 'vue'
import App from './App.vue'
import WebUi from 'addweb-ui'
import './index.css'

const app = createApp(App);
app.use(WebUi)
app.mount('#app');
