import { createApp } from 'vue'
import App from './App.vue'
import {vuetifyConfig} from "./plugins/vuetify-config.ts";
import { loadFonts } from './plugins/webfontloader'
import  './index.css'
import VuePersianDatetimePicker from 'vue3-persian-datetime-picker';
loadFonts()




createApp(App)
  .use(vuetifyConfig)
  .component("DatePicker" ,VuePersianDatetimePicker )
  .mount('#app')


