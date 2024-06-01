import { Logo } from "../Logo/Logo.tsx";

import { ClockChooser } from "../ClockChooser/ClockChooser.tsx";
import { Clock } from "../Clock/Clock.tsx";

import { Signature } from "../Signature/Signature.tsx";
import { SettingsButton } from "../SettingsButton/SettingsButton.tsx";
import { SettingsModal } from "../SettingsModal/SettingsModal.tsx";

import { FormProvider, useForm } from "react-hook-form";
import { IClockStore, useClockStore } from "../../shared/stores/clock-store.ts";
import { useModalStore } from "../../shared/stores/modal-store.ts";
import { useEffect, useState } from "react";

export interface AppFormSchema extends IClockStore {}

function App() {
  const { modes, color, font, type } = useClockStore();
  const { currentModalName, openModal, closeModal } = useModalStore();

  const [minutes, setMinutes] = useState<number>((modes as any)[type]);
  const [seconds, setSeconds] = useState<number>(0);

  const formInstance = useForm<AppFormSchema>({
    defaultValues: { color, font, modes, type },
  });

  useEffect(() => {
    setMinutes((modes as any)[type]);
    setSeconds(0);
  }, [modes, type]);

  function handleOpenSettings() {
    openModal("settings");
  }

  function handleCloseSettings() {
    closeModal();
  }

  return (
    <FormProvider {...formInstance}>
      <div className="bg-primary w-full h-full min-h-screen flex flex-col relative">
        <header className="w-full pt-8 md:pt-20 lg:pt-12 pb-10 px-4 flex items-center justify-center">
          <Logo title="pomodoro" />
        </header>

        <main className="flex flex-col gap-12">
          <ClockChooser />

          <Clock
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />

          <SettingsButton onOpen={handleOpenSettings} />
        </main>

        <footer className="flex flex-col items-center justify-center mt-auto py-8 px-4">
          <Signature />
        </footer>

        {currentModalName === "settings" ? (
          <SettingsModal onClose={handleCloseSettings} />
        ) : null}
      </div>
    </FormProvider>
  );
}

export default App;
