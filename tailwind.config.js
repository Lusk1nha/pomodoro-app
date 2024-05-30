/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Modal colors
        modal: "#0a0c1c80",
        modalContent: "#FFFFFF",
        modalBorder: "#E3E1E1",
        modalTitle: "#161932",
        modalButton: "rgba(0, 0, 0, 0.40)",
        modalFieldLabel: "rgba(0, 0, 0, 0.40)",
        modalApplyButton: "#F87070",

        // Principal colors
        primary: "#1E213F",
        title: "#D7E0FF",
        highlight: "#F87070",

        // Chooser colors
        chooser: "#161932",
        chooserActiveButton: "#F87070",
        chooserActiveText: "#1E213F",
        chooserButton: "transparent",
        chooserTextHover: "#d7e0ff",
        chooserInactiveText: "#d7e0ff66",

        // Clock colors
        clockFixed: "#161932",
        clockRight: "#2E325A",
        clockLeft: "#0E112A",
        clockText: "#D7E0FF",
        clockBlurLeft: "#272C5A",
        clockBlurRight: "#121530",
        clockButtonHover: "#F87070",

        // Settings colors
        settingsText: "#d7e0ff66",
        settingsHoverText: "#D7E0FF",

        // Input Colors
        slider: "#EFF1FA",
        sliderFont: "#1E213F",
      },
      dropShadow: {
        clock: ["-20px -20px 25px #272C5A", "20px 20px 25px #121530"],
      },
    },
  },
  plugins: [],
};
