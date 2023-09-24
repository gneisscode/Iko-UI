import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "teal-primary": "#7CB6C4",
        "teal-secondary": "#E0F2F7",
        "teal-overlay": "#6D7374",
        "teal-hover": "#578894",

        "background-dark": "#F7F7F7",
        "background-neutral": "#F8F8F8",
        "background-light": "#FFFFFF",

        "border-primary": "#F2F2F2",

        "text-primary": "#2F2F2F",
        "text-secondary": "#000000",
        "text-tertiary": "#A8A7A7",
        "text-neutral": "#595959",

        "system-disabled": "#CDCDCD",
        "system-alert": "#F86B6B",
      },
    },
  },
  plugins: [],
} satisfies Config;

