import globals from "globals"
import pluginJs from "@eslint/js"
import stylisticJs from "@stylistic/eslint-plugin-js"

export default [
  pluginJs.configs.recommended,

  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  { ignores: ["dist/**", "build/**"], },
  {
    // ...
    plugins: {
      "@stylistic/js": stylisticJs
    },
    rules: {

      "@stylistic/js/quotes": [
        "error",
        "double"
      ],
      "@stylistic/js/semi": [
        "error",
        "never"
      ],
      "eqeqeq": "error",
      "arrow-spacing": [
        "error", { "before": true, "after": true },
      ],
      "no-console": "off",
    },
  },
]
