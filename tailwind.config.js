/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E213F",
        title: "#D7E0FF",
        chooser: "#161932",
        chooserActiveButton: "#F87070",
        chooserActiveText: "#1E213F",
        chooserButton: "transparent",
        chooserTextHover: "#d7e0ff",
        chooserInactiveText: "#d7e0ff66",
        clockFixed: "#161932",
        clockRight: "#2E325A",
        clockLeft: "#0E112A",
        clockText: "#D7E0FF",
        clockBlurLeft: "#272C5A",
        clockBlurRight: "#121530",
        clockButtonHover: "#F87070",
        settingsText: "#d7e0ff66",
        settingsHoverText: "#D7E0FF"
      },
      dropShadow: {
        clock: ["-20px -20px 25px #272C5A", "20px 20px 25px #121530"],
      },
    },
  },
  plugins: [],
};
