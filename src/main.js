import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

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
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons'

library.add(faEye, faEyeSlash, faSquare, faSquareCheck, faTrashCan)

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.use(Vue3Sanitize,defaults)
.use(vue3GoogleLogin, {
  clientId: '270319015769-o80is9ik9r6pop7fmojb46ns28pic1li.apps.googleusercontent.com',
})
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
