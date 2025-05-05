import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: "0.0.0.0",  // This makes the app accessible externally
    port: process.env.PORT || 4000,  // Render automatically sets the PORT env variable
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
