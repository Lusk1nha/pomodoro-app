import { Controller, useFormContext } from "react-hook-form";
import { ArrowDownIcon } from "../../shared/assets/ArrowDownIcon";
import { ArrowUpIcon } from "../../shared/assets/ArrowUpIcon";

interface ISliderInputProps {
  name: "modes.pomodoro" | "modes.shortBreak" | "modes.longBreak";
  label: string;
}

function SliderInput(props: ISliderInputProps) {
  const { name, label } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur, onChange } }) => (
        <div className="flex md:flex-col items-center md:items-start justify-between gap-[10px]">
          <label
            htmlFor={name}
            title={label}
            aria-label={label}
            className="text-modalFieldLabel text-xs font-bold"
          >
            {label}
          </label>

          <div className="w-full max-w-[140px] md:max-w-none bg-slider flex text-sliderFont text-sm font-bold rounded-[10px] px-4 py-3 outline-none">
            <input
              className="w-full bg-transparent text-sliderFont text-sm font-bold border-none outline-none"
              name={name}
              title="Slider input"
              aria-label="Slider input"
              type="number"
              onBlur={onBlur}
              onChange={(event) => {
                const value = event.target.value;

                if (!value) return onChange(0);

                const asNumber = parseInt(value);
                onChange(asNumber);
              }}
              value={value}
            />
            <div className="flex flex-col items-center justify-center gap-2.5">
              <button
                className="stroke-sliderArrow hover:stroke-sliderArrowHover group-hover:stroke-sliderArrowHover transition"
                type="button"
                onClick={() => onChange(value + 1)}
              >
                <ArrowUpIcon />
              </button>

              <button
                className="stroke-sliderArrow hover:stroke-sliderArrowHover group-hover:stroke-sliderArrowHover transition"
                type="button"
                onClick={() => onChange(value - 1)}
              >
                <ArrowDownIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export { SliderInput };
