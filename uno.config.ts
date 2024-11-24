import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  shortcuts: {
    logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
    "flex-center": "flex justify-center items-center",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center",
    "wh-full": "w-full h-full",
    "flex-x-start": "flex items-center justify-start",
    "flex-x-between": "flex items-center justify-between",
    "flex-x-end": "flex items-center justify-end",
    "absolute-lt": "absolute left-0 top-0",
    "absolute-rt": "absolute right-0 top-0 ",
    "fixed-lt": "fixed left-0 top-0",
  },
  theme: {
    colors: {
      primary: "var(--ant-primary-color)",
      primary_hover: "var(--ant-primary-color-hover)",
      primary_active: "var(--ant-primary-color-active)",
      primary_outline: "var(--ant-primary-color-outline)",
      
      // 文本颜色
      text: "var(--ant-text-color)",
      text_secondary: "var(--ant-text-color-secondary)",
      text_disabled: "var(--ant-text-color-disabled)",
      
      // 背景色
      bg: "var(--ant-background-color-base)",
      component_bg: "var(--ant-component-background)",
      
      // 边框色
      border: "var(--ant-border-color-base)",
      border_split: "var(--ant-border-color-split)",
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  
}) 