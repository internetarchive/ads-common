import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    sourcemap: true,
    format: "esm",
  },
  plugins: [nodeResolve(), commonjs(), typescript()],
  watch: {
    exclude: ['node_modules/**'],
  }
};
