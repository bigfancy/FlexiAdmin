import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from "path";

import { type UserConfig, type ConfigEnv, loadEnv, defineConfig } from "vite";

const pathSrc = resolve(__dirname, "./src");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        api: "modern-compiler",
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
  plugins: [
    UnoCSS({
      shortcuts: [
        { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    React(),
  ],
})
