import { liveServer } from 'rollup-plugin-live-server';

export default {
  input: "index.js",
  output: {
    file: ".storybook/index.js",
    sourcemap: true,
    format: "esm",
  },
  plugins: [liveServer({
    port: 8001,
    host: "0.0.0.0",
    root: "demo",
    file: "storybook.html",
    mount: [['/', './']],
    open: false,
    wait: 500
  })],
  watch: {
    exclude: ['node_modules/**'],
  }
};