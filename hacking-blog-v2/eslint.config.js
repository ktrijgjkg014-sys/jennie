import { FlatCompat } from "@eslint/eslintrc";

const js = new FlatCompat({
  baseDir: __dirname,
  plugins: {
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    'react': require('eslint-plugin-react'),
    'react-hooks': require('eslint-plugin-react-hooks'),
    'next': require('eslint-plugin-next'),
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const eslintConfig = [
  ...js.extends("next/core-web-vitals"),
  ...js.configs.recommended,
  ...js.configs['jsx-runtime'],
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...js.extends("@typescript-eslint/recommended"),
  },
  {
    rules: {
      // Accessibility rules
      "react/jsx-key": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript specific
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Next.js specific
      "@next/next/no-img-element": "error",
      
      // Code quality
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      "dist/",
      "*.js",
    ],
  },
];

export default eslintConfig;