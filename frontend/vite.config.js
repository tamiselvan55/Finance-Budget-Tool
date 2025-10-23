import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Finance-Budget-Tool/',  // <-- must match repo name
});
