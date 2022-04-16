import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( fas )
dom.watch();

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.use(store)

app.mount('#app')