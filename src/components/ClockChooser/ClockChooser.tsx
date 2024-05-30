import classNames from "classnames";
import { useState } from "react";

const ClockTypes = ["pomodoro", "short break", "long break"];

function ClockChooser() {
  const [currentValue, setCurrentValue] = useState("pomodoro");

  function handleClockTypeChange(value: string) {
    setCurrentValue(value);
  }

  return (
    <section className="w-full flex items-center justify-center px-6 z-10">
      <div className="bg-chooser w-[360px] h-16 rounded-[31.5px] flex items-center justify-between p-2">
        {ClockTypes.map((type) => (
          <Button
            key={type}
            text={type}
            isActive={type === currentValue}
            handleClick={handleClockTypeChange}
          />
        ))}
      </div>
    </section>
  );
}

interface IButtonProps {
  text: string;
  isActive: boolean;
  handleClick: (value: string) => void;
}
function Button(props: IButtonProps) {
  const { text, isActive, handleClick } = props;

  return (
    <button
      title={"Clock type with name: " + text}
      aria-label="Choose clock type for the session"
      className={classNames(
        "h-12 text-xs text-choosertext font-bold rounded-[26.5px] px-6 transition",
        isActive
          ? "bg-chooserActiveButton text-chooserActiveText"
          : "bg-chooserButton text-chooserInactiveText hover:text-chooserTextHover"
      )}
      onClick={() => handleClick(text)}
    >
      {text}
    </button>
  );
}

export { ClockChooser };
