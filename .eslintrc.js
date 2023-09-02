
module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "react",
    "jest",
    "cypress"
  ],
  rules: {
    "react/no-unescaped-entities": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "prefer-const": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0
  },
  settings: {
    react: {
      version: "detect",
    },
  }
}

