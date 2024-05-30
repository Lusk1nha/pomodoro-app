import { CloseIcon } from "../../shared/assets/CloseIcon";
import { SliderInput } from "./SliderInput";
import { Title } from "./Title";

interface ISettingsModalProps {
  onClose: () => void;
}

function SettingsModal(props: ISettingsModalProps) {
  const { onClose } = props;

  return (
    <div className="bg-modal w-full h-full top-0 bottom-0 absolute px-6 py-[55px] flex items-start md:items-center justify-center z-50">
      <form className="bg-modalContent max-w-[360px] md:max-w-[540px] max-h-[549px] md:max-h-[464px] w-full h-full rounded-[15px] relative">
        <div className="p-6 border-b-modalBorder border-b flex items-center justify-between">
          <h3 className="text-xl md:text-[28px] text-modalTitle font-bold">
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

        <div className="p-6 md:px-10 flex flex-col gap-6">
          <fieldset className="flex flex-col border-b border-b-modalBorder pb-6">
            <Title title="TIME (MINUTES)" />

            <div className="flex flex-col md:flex-row md:justify-between gap-5">
              <SliderInput name="clock-type" label="pomodoro" />
              <SliderInput name="clock-type" label="short break" />
              <SliderInput name="clock-type" label="long break" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col border-b border-b-modalBorder pb-6">
            <Title title="Font" />
          </fieldset>

          <fieldset className="flex flex-col pb-6">
            <Title title="Color" />
          </fieldset>
        </div>

        <div className="w-full absolute -bottom-[5%] right-0 left-0 flex items-center justify-center">
          <button
            type="submit"
            className="max-w-[140px] bg-modalApplyButton text-base font-bold text-white py-4 px-12 rounded-[26.5px]"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export { SettingsModal };
