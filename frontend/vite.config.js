import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Ensure this matches the port in docker-compose.yml
    host: '0.0.0.0', // Allow connections from outside the container
  },
});