import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vue sanitize
import Vue3Sanitize from "vue-3-sanitize";
let defaults = Vue3Sanitize.defaults;
defaults.allowedTags = [];

// Font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import faEye */
import { faEye, faEyeSlash, faLessThan, faGreaterThan, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck, faTrashCan} from '@fortawesome/free-regular-svg-icons'

library.add(faEye, faEyeSlash, faSquare, faSquareCheck, faTrashCan, faLessThan, faGreaterThan, faPlus, faMinus)

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.use(Vue3Sanitize,defaults)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
