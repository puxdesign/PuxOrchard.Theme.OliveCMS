import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../wwwroot',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "css";
          }
          return `${extType}/pux-admin[extname]`;
        },
        entryFileNames: "js/pux-admin.js",
        chunkFileNames: "js/pux-admin-chunk-[hash].js",
        manualChunks: undefined,
      }
    }
  },
  server: {
    port: 8080
  },
  plugins: [
  ]
}


