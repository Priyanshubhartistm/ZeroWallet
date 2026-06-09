import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Stub out broken kora sub-deps so browser build doesn't choke
      '@solana/kit': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
      '@solana/kit-plugin-instruction-plan': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
      '@solana/kit-plugin-payer': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
      '@solana/kit-plugin-rpc': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
      '@solana-program/token': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
      '@solana-program/compute-budget': path.resolve(__dirname, './src/lib/stubs/solana-kit-stub.ts'),
    },
  },
}));
