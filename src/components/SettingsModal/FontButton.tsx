import classNames from "classnames";
import { ClockFonts } from "../../shared/stores/clock-store";
import { Controller, useFormContext } from "react-hook-form";

interface IFontButtonProps {
  name: "font";
  type: ClockFonts;
}

function FontButton(props: IFontButtonProps) {
  const { name, type } = props;

  const { control } = useFormContext();

  const borders = {
    KumbhSans: "border-kumbhSansPrimary",
    RobotoSlab: "border-robotoSlabPrimary",
    SpaceMono: "border-spaceMonoPrimary",
  };

  const colors = {
    KumbhSans:
      "font-KumbhSans bg-kumbhSansPrimary text-kumbhSansText font-bold",
    RobotoSlab:
      "font-RobotoSlab bg-robotoSlabPrimary text-robotoSlabText font-normal",
    SpaceMono:
      "font-SpaceMono bg-spaceMonoPrimary text-spaceMonoText font-bold",
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
              "w-[50px] h-[50px] flex items-center justify-center rounded-full transition",
              border ? border : "",
              isActive ? "border" : "hover:border"
            )}
          >
            <div
              className={classNames(
                "w-10 h-10 flex items-center justify-center text-[15px] p-2.5 rounded-full",
                color ? color : ""
              )}
            >
              Aa
            </div>
          </button>
        );
      }}
    />
  );
}

export { FontButton };
