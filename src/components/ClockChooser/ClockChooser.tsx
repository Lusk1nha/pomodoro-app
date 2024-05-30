import classNames from "classnames";

function ClockChooser() {
  return (
    <section className="w-full flex items-center justify-center px-6 z-10">
      <div className="bg-chooser w-[327px] h-16 rounded-[31.5px] flex items-center justify-between p-2">
        <Button text="pomodoro" currentValue="pomodoro" />
        <Button text="short break" />
        <Button text="long break" />
      </div>
    </section>
  );
}

interface IButtonProps {
  text: string;
  currentValue?: string;
}
function Button(props: IButtonProps) {
  const { text, currentValue } = props;

  const isActive = currentValue === text;

  return (
    <button
      title={"Clock type with name: " + text}
      aria-label="Choose clock type for the session"
      className={classNames(
        "h-12 text-xs text-choosertext font-bold rounded-[26.5px] transition",
        isActive
          ? "bg-chooserActiveButton text-chooserActiveText px-6"
          : "bg-chooserButton text-chooserInactiveText hover:text-chooserTextHover px-4"
      )}
    >
      {text}
    </button>
  );
}

export { ClockChooser };
