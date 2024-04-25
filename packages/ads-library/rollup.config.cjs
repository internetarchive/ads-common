import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import minify from "rollup-plugin-minify";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    sourcemap: true,
    format: "esm",
  },
  plugins: [typescript(), nodeResolve(), commonJs(), minify()],
  watch: {
    exclude: ["node_modules/**"],
  },
};
