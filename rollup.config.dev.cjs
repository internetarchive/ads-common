import { liveServer } from 'rollup-plugin-live-server';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonJs from "@rollup/plugin-commonjs";
import minify from "rollup-plugin-minify";

export default {
  input: "index.js",
  output: {
    file: ".storybook/index.js",
    sourcemap: true,
    format: "esm",
  },
  plugins: [
    liveServer({
      port: 8001,
      host: "0.0.0.0",
      root: "demo",
      file: ".storybook/index.js",
      mount: [['/', './']],
      open: false,
      wait: 500
    }),
    nodeResolve(),
    commonJs(),
    typescript(),
    minify(),
  ],
  watch: {
    exclude: ['node_modules/**'],
  }
};