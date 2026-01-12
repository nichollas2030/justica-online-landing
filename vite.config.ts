import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      // Define o token para o WebSocket HMR
      clientPort: 8080,
    },
  },
  define: {
    // Define variáveis globais para evitar erros de referência
    __WS_TOKEN__: JSON.stringify(process.env.WS_TOKEN || 'vite-hmr'),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
}));
