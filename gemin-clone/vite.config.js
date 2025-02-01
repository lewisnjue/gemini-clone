import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access
    port: 5173, // Ensure it's the right port
    strictPort: true,
    allowedHosts: [
      "5173-lewisnjue-geminiclone-1xlrn2y8zhl.ws-eu117.gitpod.io" // Add your Gitpod URL here
    ]
  }
});