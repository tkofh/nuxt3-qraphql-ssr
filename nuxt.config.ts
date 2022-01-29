import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: false,
  build: {
    transpile: ['@apollo', 'ts-invariant'],
    plugins: [
      new (class {
        apply(compiler) {
          compiler.options.module.rules.push({
            resourceQuery: /raw/,
            use: 'raw-loader',
          })
        }
      })
    ]
  }
})