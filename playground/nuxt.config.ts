import { defineNuxtConfig } from 'nuxt/config'
import nanta from '..'

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  modules: [
    nanta,    
  ],
})
