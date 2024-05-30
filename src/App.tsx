import Header from "./components/Header/Header";

import { ClockChooser } from "./components/ClockChooser/ClockChooser";
import { Clock } from "./components/Clock/Clock";

import { SettingsIcon } from "./shared/assets/SettingsIcon.tsx";

function App() {
  function handleSettingsModal() {
    console.log("Settings modal opened");
  }

  return (
    <div className="bg-primary w-full h-screen">
      <Header title="pomodoro" />

      <main className="flex flex-col gap-12">
        <ClockChooser />
        <Clock />
      </main>

      <footer className="flex flex-col items-center justify-center pt-24">
        <button
          aria-label="Open settings modal"
          title="Click to open settings modal"
          className="w-7 h-7  fill-settingsText hover:fill-settingsHoverText transition"
          type="button"
          onClick={handleSettingsModal}
        >
          <SettingsIcon />
        </button>
      </footer>
    </div>
  );
}

export default App;
