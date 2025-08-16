export default [
  {
    files: ["public/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        alert: "readonly"
      }
    },
    rules: {
      semi: "error",
      "no-unused-vars": "warn"
    }
  }
];
