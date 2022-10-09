import { defineNuxtConfig } from 'nuxt/config'
import nantaui from '..'

export default defineNuxtConfig({
  modules: [
    nantaui
  ],
  nantaui: {
    addPlugin: true
  }
})
