import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

 // https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig( {
//   root: resolve(__dirname, 'src'),
//   build: {
//     outDir: '../dist'
//   },
//   server: {
//     port: 3000
//   },
//   plugins: [react()]
// });

