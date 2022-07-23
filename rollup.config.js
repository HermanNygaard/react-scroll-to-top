import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [postcss(), , babel(), typescript()],
  external: ["react", "react-dom"],
};
