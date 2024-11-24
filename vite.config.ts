import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve } from "path";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import { type UserConfig, type ConfigEnv, loadEnv, defineConfig } from "vite";
import {
  name,
  version,
  dependencies,
  devDependencies,
} from "./package.json";

const pathSrc = resolve(__dirname, "./src");

// 平台信息
const __APP_INFO__ = {
  pkg: { name, version, dependencies, devDependencies },
  buildTimestamp: Date.now(),
};

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  console.log('当前环境：', mode);
  const env = loadEnv(mode, process.cwd());
  console.log('环境变量：', env);
  
  // 添加调试日志
  console.log('Mock Server Status:', {
    enabled: env.VITE_MOCK_DEV_SERVER === "true",
    baseApi: env.VITE_APP_BASE_API,
    port: env.VITE_APP_PORT
  });
  
  // 添加详细的调试日志
  console.log('Vite Configuration:', {
    mode,
    mockEnabled: env.VITE_MOCK_DEV_SERVER === "true",
    baseApi: env.VITE_APP_BASE_API,
    port: env.VITE_APP_PORT,
    cwd: process.cwd(),
    mockFiles: `${process.cwd()}/mock/**/*.ts`  // 显示 mock 文件路径
  });


  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          api: "modern-compiler",
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: +env.VITE_APP_PORT,
      open: true,
      proxy: {
        // 代理 /dev-api 的请求
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 代理目标地址：https://api.youlai.tech
          target: env.VITE_APP_API_URL,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
    plugins: [
      UnoCSS(),
      React(),
      env.VITE_MOCK_DEV_SERVER === "true" ? mockDevServerPlugin() : null,
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      minify: "terser",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: "js/[name].[hash].js",
          chunkFileNames: "js/[name].[hash].js",
          assetFileNames: (assetInfo: any) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `${extType}/[name].[hash].[ext]`;
          },
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
