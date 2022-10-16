import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
/* add icons to the library */
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'

library.add(faEye, faEyeSlash, faCircleCheck, faCircleXmark)


createApp(App)
.use(store).use(router).use(Vue3Sanitize,defaults).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
