import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

const pathResolve =  (pathStr: string)=> {
  return path.resolve(__dirname, pathStr);
};

module.exports = defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  alias: {
    '@': pathResolve('./src'),
  },
  build:{
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  base:"./",//打包路径
  server: {
    port:9797,//启动端口
    open: true,
    // 反向代理
    proxy: {
      '/api': {
        target: 'http://192.168.2.9:8123/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,"")
      }
    },
    cors:true
  },
});
