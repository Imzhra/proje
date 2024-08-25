import { createApp } from 'vue'
import App from './App.vue'
import {vuetifyConfig} from "./plugins/vuetify-config.ts";
import { loadFonts } from './plugins/webfontloader'
import  './index.css'

loadFonts()




createApp(App)
  .use(vuetifyConfig)
  .mount('#app')


