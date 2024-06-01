import classNames from "classnames";
import { useClockStore } from "../../shared/stores/clock-store";

interface IProgressProps {
  total: number;
}

function Progress({ total }: IProgressProps) {
  const { color } = useClockStore();

  const colors = {
    red: "stroke-redPrimary",
    green: "stroke-greenPrimary",
    purple: "stroke-purplePrimary",
  };

  const currentColor = colors[color] || "stroke-redPrimary";

  const STROKE_DASHARRAY = 1075;
  
  // Inverter o cálculo do offset para que o progresso seja contado de 0 a 100%
  const strokeDashoffset = STROKE_DASHARRAY - (STROKE_DASHARRAY * total) / -100;

  return (
    <svg className="w-full h-full absolute">
      <circle
        className={classNames(
          "stroke-[8px] md:stroke-[10px] origin-center -rotate-90 transition-all duration-1000 linear",
          currentColor
        )}
        cx="50%"
        cy="50%"
        r="45%"
        strokeDasharray={STROKE_DASHARRAY}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export { Progress };
