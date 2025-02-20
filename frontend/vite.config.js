import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});






// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': process.env
//   },
//   plugins: [react()],
//   build: {
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     }
//   } 
// })