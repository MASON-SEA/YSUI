import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

// Helper function to get all index.tsx files in the components directory
function getComponentEntries(dir) {
  const entries = {};
  const componentDirs = fs.readdirSync(dir);

  componentDirs.forEach((componentDir) => {
    const fullPath = path.join(dir, componentDir, 'index.tsx');
    if (fs.existsSync(fullPath)) {
      const entryName = path.join('components', componentDir, 'index');
      entries[entryName] = fullPath;
    }
  });

  return entries;
}

const componentEntries = getComponentEntries(path.resolve(__dirname, 'src/components'));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        ...componentEntries
      },
      output: [
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].js'
        },
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js'
        }
      ],
      
      // 其他 rollup 配置
      external: ['yselement'],
    },
  },
});
