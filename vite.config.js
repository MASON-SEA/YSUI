import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

function getComponentEntries(dir) {
  const entries = {};
  for (const componentDir of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, componentDir, "index.tsx");
    if (fs.existsSync(fullPath)) {
      entries[`components/${componentDir}/index`] = fullPath;
    }
  }
  return entries;
}

const componentEntries = getComponentEntries(
  path.resolve(__dirname, "src/components")
);

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.tsx"),
        ...componentEntries,
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${format === "es" ? "es" : "cjs"}/${entryName}.js`,
    },
    rollupOptions: {
      external: ["yselement"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "es/library.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
