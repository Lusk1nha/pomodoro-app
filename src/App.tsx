import { Logo } from "./components/Logo/Logo.tsx";

import { ClockChooser } from "./components/ClockChooser/ClockChooser";
import { Clock } from "./components/Clock/Clock";

import { Signature } from "./components/Signature/Signature.tsx";
import { SettingsButton } from "./components/SettingsButton/SettingsButton.tsx";
import { SettingsModal } from "./components/SettingsModal/SettingsModal.tsx";

import { useState } from "react";

function App() {
  const [settingsOpened, setSettingsOpened] = useState(false);

  function handleOpenSettings() {
    setSettingsOpened(true);
  }

  function handleCloseSettings() {
    setSettingsOpened(false);
  }

  return (
    <div className="bg-primary w-full h-full min-h-screen flex flex-col relative">
      <header className="w-full pt-8 md:pt-20 lg:pt-12 pb-10 px-4 flex items-center justify-center">
        <Logo title="pomodoro" />
      </header>

      <main className="flex flex-col gap-12">
        <ClockChooser />
        <Clock />

        <SettingsButton onOpen={handleOpenSettings} />
      </main>

      <footer className="flex flex-col items-center justify-center mt-auto py-8 px-4">
        <Signature />
      </footer>

      {settingsOpened ? <SettingsModal onClose={handleCloseSettings} /> : null}
    </div>
  );
}

export default App;
