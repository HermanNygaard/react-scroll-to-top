import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript(), postcss({
    modules: true
  }), , babel()],
  external: ["react", "react-dom"],
};
