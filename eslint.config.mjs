import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      parserOptions: {
        ecmaVersion: 2023 // Ajuste conforme necessário para a versão ECMAScript que você está utilizando
      },
      globals: {
        __dirname: "readonly" // Permite o uso de __dirname como variável global de leitura
      }
    },
    rules: {
      "constructor-super": "off" // Desativa a regra problemática
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended
];
