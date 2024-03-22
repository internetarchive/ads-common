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
    nodeResolve(),
    commonJs(),
    typescript(),
    minify(),
  ],
  watch: {
    exclude: ['node_modules/**'],
  }
};