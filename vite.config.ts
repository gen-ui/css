import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const options = { pretty: true }
const locals = { testVariable: 'PUG variable global' };

export default defineConfig({
  plugins: [pugPlugin(options, locals)]
})
