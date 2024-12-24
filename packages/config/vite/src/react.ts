import { patchCssModules } from 'vite-css-modules'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export const reactConfig = defineConfig({
  plugins: [patchCssModules({ generateSourceTypes: true }), react(), tsconfigPaths()],
})
