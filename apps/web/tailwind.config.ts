import type { Config } from 'tailwindcss'



import { boisTailwindPreset } from '@dank/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/dist/**/*.js'],
  darkMode: 'class',
  presets: [boisTailwindPreset],
}

export default config
