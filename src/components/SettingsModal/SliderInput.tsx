interface ISliderInputProps {
  name: string;
  label: string;
}

function SliderInput(props: ISliderInputProps) {
  const { name, label } = props;

  return (
    <div className="flex md:flex-col items-center md:items-start justify-between gap-[10px]">
      <label
        htmlFor={name}
        title={label}
        aria-label={label}
        className="text-modalFieldLabel text-xs font-bold"
      >
        {label}
      </label>

      <input
        name={name}
        type="number"
        className="w-full max-w-[140px] md:max-w-none bg-slider text-sliderFont text-sm font-bold rounded-[10px] px-4 py-3 outline-none"
      />
    </div>
  );
}

export { SliderInput };
