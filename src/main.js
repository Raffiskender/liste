import { createApp } from 'vue'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fas } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import router from './router'
import store from './store'

//library.add(fas);

createApp(App)
.use(store).use(router).mount('#app')
