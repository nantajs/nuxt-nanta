import { defineNuxtPlugin } from '#app'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { setupNanta } from '@nanta/ui';
import '@nanta/ui/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {  
  setupNanta(nuxtApp.vueApp);
  nuxtApp.vueApp.use(Antd)
})
