import { Logo } from "../Logo/Logo.tsx";

import { ClockChooser } from "../ClockChooser/ClockChooser.tsx";
import { Clock } from "../Clock/Clock.tsx";

import { Signature } from "../Signature/Signature.tsx";
import { SettingsButton } from "../SettingsButton/SettingsButton.tsx";
import { SettingsModal } from "../SettingsModal/SettingsModal.tsx";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IClockStore, useClockStore } from "../../shared/stores/clock-store.ts";

export interface AppFormSchema extends IClockStore {}

function App() {
  const [settingsOpened, setSettingsOpened] = useState(false);

  const { color, font, modes, type } = useClockStore();

  const formInstance = useForm<AppFormSchema>({
    defaultValues: { color, font, modes, type },
  });

  function handleOpenSettings() {
    setSettingsOpened(true);
  }

  function handleCloseSettings() {
    setSettingsOpened(false);
  }

  return (
    <FormProvider {...formInstance}>
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

        {settingsOpened ? (
          <SettingsModal onClose={handleCloseSettings} />
        ) : null}
      </div>
    </FormProvider>
  );
}

export default App;
