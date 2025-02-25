import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})






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