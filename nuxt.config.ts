import {defineNuxtConfig} from 'nuxt3'
import replace from '@rollup/plugin-replace'

const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  vite: false,
  nitro: {
    externals: isProd ? false : undefined,
    hooks: {
      nitro: {
        rollup: {
          before: (nitroContext) => {
            nitroContext.rollupConfig.plugins.push(replace({
              values: {
                'util.globalThis.': 'util.global.'
              },
              preventAssignment: true,
            }))
          }
        }
      }
    },
  },
  build: {
    transpile: ['@apollo/client', 'ts-invariant'],
  }
})
