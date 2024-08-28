import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaFlag,
  RiZhihuFill,
  IoHomeSharp,
  GiPlainCircle,
  HiDotsCircleHorizontal,
  BiCheckCircleFill,
  LaJava,
  CoJavascript,
  CoPython,
  CoSpring,
  IoLogoVue,
  CoReact,
  CoFigma,
  BiGit,
  CoUbuntu,
  CoDocker,
  SiApachemaven,
  CoNpm,
  CoTrello,
  SiMicrosoftoffice,
  SiMicrosoftazure,
  SiCypress,
  CoPostman,
  IoLogoGithub,
  IoMusicalNoteSharp,
  BiCameraFill,
  HiCode,
  PiLucario,
  GiTeacher,
  GiRetroController,
  IoExtensionPuzzleSharp
} from 'oh-vue-icons/icons'
import App from './App.vue'
import router from './router'
import ganttastic from '@infectoone/vue-ganttastic'
addIcons(
  FaFlag,
  RiZhihuFill,
  IoHomeSharp,
  GiPlainCircle,
  HiDotsCircleHorizontal,
  BiCheckCircleFill,
  LaJava,
  CoJavascript,
  CoPython,
  CoSpring,
  IoLogoVue,
  CoReact,
  CoFigma,
  BiGit,
  CoUbuntu,
  CoDocker,
  SiApachemaven,
  CoNpm,
  CoTrello,
  SiMicrosoftoffice,
  SiMicrosoftazure,
  SiCypress,
  CoPostman,
  IoLogoGithub,
  IoMusicalNoteSharp,
  BiCameraFill,
  HiCode,
  GiTeacher,
  GiRetroController,
  IoExtensionPuzzleSharp,
  PiLucario
)
import LoadScript from 'vue-plugin-load-script'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ganttastic)
app.use(LoadScript)
app.component('v-icon', OhVueIcon)
app.mount('#app')
