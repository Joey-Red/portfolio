/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      maxImg: "calc(100vh - 655.21px)",
      // 394.08
    },
    maxWidth: {
      fitImgW: "calc(50vw - 400px)",
    },
    minHeight: {
      maxImg: "calc(100vh - 655.21px)",
    },
  },
  plugins: [],
};
