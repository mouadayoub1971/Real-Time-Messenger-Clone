/** @type {import('prettier').Config} */
export default {
  plugins: [
    "@prettier/plugin-php",
    "prettier-plugin-blade",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["clsx"],
  overrides: [
    {
      files: "*.blade.php",
      options: {
        parser: "blade",
      },
    },
  ],
};
