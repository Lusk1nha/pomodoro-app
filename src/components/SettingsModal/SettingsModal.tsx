import { useFormContext } from "react-hook-form";
import { CloseIcon } from "../../shared/assets/CloseIcon";
import { SliderInput } from "./SliderInput";
import { Title } from "./Title";

import { AppFormSchema } from "../App/App";
import { FontButton } from "./FontButton";
import { useClockStore } from "../../shared/stores/clock-store";
import { ColorButton } from "./ColorButton";
import classNames from "classnames";

interface ISettingsModalProps {
  onClose: () => void;
}

function SettingsModal(props: ISettingsModalProps) {
  const { onClose } = props;

  const { handleSubmit } = useFormContext<AppFormSchema>();

  const { state, setState, setClock } = useClockStore();

  function handleApplySettings(data: AppFormSchema) {
    setClock(data);
    setState("start")
  }

  return (
    <div className="bg-modal w-full h-full top-0 bottom-0 absolute px-6 py-[55px] flex items-start md:items-center justify-center z-50">
      <form
        className="bg-modalContent max-w-[360px] md:max-w-[540px] w-full h-fit rounded-[15px] relative"
        onSubmit={handleSubmit(handleApplySettings)}
      >
        <div className="p-6 border-b-modalBorder border-b flex items-center justify-between">
          <h3 title="Modal title" aria-label="Modal title called: Settings" className="text-xl md:text-[28px] text-modalTitle font-bold">
            Settings
          </h3>
          <button
            title="Close settings modal"
            aria-label="Close settings modal"
            type="button"
            className="fill-modalButton hover:fill-black transition"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6 pb-[60px] md:px-10 flex flex-col gap-6">
          <fieldset className="flex flex-col border-b border-b-modalBorder pb-6 gap-4">
            <Title title="TIME (MINUTES)" />

            <div className="flex flex-col md:flex-row md:justify-between gap-5">
              <SliderInput name="modes.pomodoro" label="pomodoro" />
              <SliderInput name="modes.shortBreak" label="short break" />
              <SliderInput name="modes.longBreak" label="long break" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col md:flex-row md:items-center border-b border-b-modalBorder pb-6 gap-4">
            <Title title="Font" />

            <div className="flex items-center justify-center gap-4">
              <FontButton name="font" type="KumbhSans" />
              <FontButton name="font" type="RobotoSlab" />
              <FontButton name="font" type="SpaceMono" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col md:flex-row md:items-center gap-4">
            <Title title="Color" />

            <div className="flex items-center justify-center gap-4">
              <ColorButton name="color" type="red" />
              <ColorButton name="color" type="green" />
              <ColorButton name="color" type="purple" />
            </div>
          </fieldset>
        </div>

        <div className="w-full absolute -bottom-[5%] right-0 left-0 flex items-center justify-center">
          <button
            type="submit"
            className={classNames(
              "bg-modalApplyButton hover:bg-modalApplyButtonHover text-base font-bold text-white py-4 px-12 rounded-[26.5px] transition"
            )}
          >
            {state === "running" ? "Apply and Reset" : "Apply"}
          </button>
        </div>
      </form>
    </div>
  );
}

export { SettingsModal };
