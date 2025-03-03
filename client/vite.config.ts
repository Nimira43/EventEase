import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), mkcert()],
})
