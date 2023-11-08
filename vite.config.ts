import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@config": "/config",
      "@service": "/business/application/services",
      "@interface": "/business/application/interface",
      "@request": "/business/models/entities/request",
      "@response": "/business/models/entities/response",
      "@enums": "/business/models/enums",
      "@types": "/business/models/types",
      "@pages": "/src/app/pages",
      "@shared": "/src/app/shared",
      "@store": "/src/Store",
      "@assets": "/src/assets",
      "@src": "/src"
    },
  },
})
