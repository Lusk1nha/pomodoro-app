import classNames from "classnames";
import { ClockColors } from "../../shared/stores/clock-store";
import { Controller, useFormContext } from "react-hook-form";

interface IColorButtonProps {
  name: "color";
  type: ClockColors;
}

function ColorButton(props: IColorButtonProps) {
  const { name, type } = props;

  const { control } = useFormContext();

  const borders = {
    red: "border-redPrimary",
    green: "border-greenPrimary",
    purple: "border-purplePrimary",
  };

  const colors = {
    red: "bg-redPrimary",
    green: "bg-greenPrimary",
    purple: "bg-purplePrimary",
  };

  const border = borders[type];
  const color = colors[type];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur, onChange } }) => {
        const isActive = value === type;

        return (
          <button
            type="button"
            onBlur={onBlur}
            onClick={() => onChange(type)}
            className={classNames(
              "w-[50px] h-[50px] flex items-center justify-center rounded-full transition hover:border",
              border ? border : ""
            )}
          >
            <div
              className={classNames(
                "w-10 h-10 flex items-center justify-center text-[15px] p-2.5 rounded-full",
                color ? color : ""
              )}
            >
              {isActive ? "✓" : ""}
            </div>
          </button>
        );
      }}
    />
  );
}

export { ColorButton };
