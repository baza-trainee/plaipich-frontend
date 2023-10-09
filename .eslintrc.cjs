module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "next/core-web-vitals",
  ],
  ignorePatterns: [".next", ".eslintrc.cjs"],
  plugins: ["simple-import-sort"],
  rules: {
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-unresolved": "off",
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/first": ["error"],
  },
};
