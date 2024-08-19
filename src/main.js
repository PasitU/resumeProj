import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill, IoHomeSharp } from 'oh-vue-icons/icons'
import App from './App.vue'
import router from './router'
import ganttastic from '@infectoone/vue-ganttastic'
addIcons(FaFlag, RiZhihuFill, IoHomeSharp)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ganttastic)
app.component('v-icon', OhVueIcon)
app.mount('#app')
