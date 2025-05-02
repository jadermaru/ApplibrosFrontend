import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular'; // o el plugin que estés usando

export default defineConfig({
  plugins: [angular()],
  server: {
    host: '0.0.0.0',
    port: 4200,
    allowedHosts: ['applibrosfrontend-1.onrender.com'],
  }
});
