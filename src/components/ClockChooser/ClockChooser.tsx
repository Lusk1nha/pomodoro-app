import classNames from "classnames";

import {
  ClockColors,
  ClockFonts,
  ClockTypes,
  useClockStore,
} from "../../shared/stores/clock-store";
import { useFormContext } from "react-hook-form";

function ClockChooser() {
  const { type, font, color, setState, setType } = useClockStore();
  const { setValue } = useFormContext();

  function handleClick(value: ClockTypes) {
    setValue("type", value);

    setState("start");
    setType(value);
  }

  return (
    <section className="w-full flex items-center justify-center px-6 z-10">
      <div className="bg-chooser w-[360px] h-16 rounded-[31.5px] flex items-center justify-between p-2">
        <Button
          name="pomodoro"
          text={"pomodoro"}
          font={font}
          color={color}
          isActive={"pomodoro" === type}
          handleClick={handleClick}
        />
        <Button
          name="shortBreak"
          text={"short break"}
          font={font}
          color={color}
          isActive={"shortBreak" === type}
          handleClick={handleClick}
        />

        <Button
          name="longBreak"
          text={"long break"}
          font={font}
          color={color}
          isActive={"longBreak" === type}
          handleClick={handleClick}
        />
      </div>
    </section>
  );
}

interface IButtonProps {
  name: ClockTypes;
  text: string;
  font: ClockFonts;
  color: ClockColors;
  isActive: boolean;
  handleClick: (clock: ClockTypes) => void;
}
function Button(props: IButtonProps) {
  const { name, text, font, color, isActive, handleClick } = props;

  const fonts = {
    KumbhSans: "font-KumbhSans",
    RobotoSlab: "font-RobotoSlab",
    SpaceMono: "font-SpaceMono",
  };

  const colors = {
    red: "bg-redPrimary text-chooserActiveText",
    green: "bg-greenPrimary text-chooserActiveText",
    purple: "bg-purplePrimary text-chooserActiveText",
  };

  const currentColor = colors[color];
  const currentFont = fonts[font];

  return (
    <button
      title={"Clock type with name: " + text}
      aria-label="Choose clock type for the session"
      className={classNames(
        "h-12 text-xs text-choosertext font-bold rounded-[26.5px] px-6 transition",
        currentFont ? currentFont : "",
        isActive
          ? currentColor
          : "bg-chooserButton text-chooserInactiveText hover:text-chooserTextHover"
      )}
      onClick={() => handleClick(name)}
    >
      {text}
    </button>
  );
}

export { ClockChooser };
