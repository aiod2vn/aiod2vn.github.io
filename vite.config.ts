import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // DÒNG QUAN TRỌNG ĐƯỢC THÊM VÀO ĐỂ DEPLOY
  base: '/aiod2vn.github.io/',

  // CÁC CẤU HÌNH CŨ CỦA BẠN ĐƯỢC GIỮ NGUYÊN
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));