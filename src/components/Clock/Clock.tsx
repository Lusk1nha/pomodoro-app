import classNames from "classnames";
import { useClockStore } from "../../shared/stores/clock-store";
import { useEffect, useRef, useCallback } from "react";
import { Progress } from "./Progress";

interface IClockProps {
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

function Clock(props: IClockProps) {
  const { minutes, setMinutes, seconds, setSeconds } = props;
  const { state, type, modes, font, color, setState } = useClockStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fonts = {
    KumbhSans: "font-KumbhSans",
    RobotoSlab: "font-RobotoSlab",
    SpaceMono: "font-SpaceMono",
  };

  const colors = {
    red: "group-hover:text-redPrimary",
    green: "group-hover:text-greenPrimary",
    purple: "group-hover:text-purplePrimary",
  };

  const currentColor = colors[color];
  const currentFont = fonts[font];

  const progress = ((minutes * 60 + seconds) / (modes[type] * 60)) * 100;

  const tick = useCallback(() => {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalRef.current!);
          setState("finished");
          return 0; // Defina os segundos como 0 quando chegar a 0
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1); // Reduza os minutos em 1
          return 59; // Redefina os segundos para 59
        }
      } else {
        return prevSeconds - 1;
      }
    });
  }, [minutes, setMinutes, setState]);

  useEffect(() => {
    if (state === "running") {
      intervalRef.current = setInterval(tick, 1000); // Ajustado para 1000ms (1s)
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state, tick]);

  function handleState() {
    if (state === "running") {
      setState("paused");
    } else if (state === "finished") {
      setMinutes(modes[type]);
      setSeconds(0);
      setState("running");
    } else {
      setState("running");
    }
  }

  return (
    <section className="w-full flex items-center justify-center md:px-[38px]">
      <button
        type="button"
        onClick={handleState}
        className="group bg-gradient-to-tl from-clockRight to-clockLeft w-[300px] h-[300px] md:w-[410px] md:h-[410px] flex items-center justify-center p-4 drop-shadow-clock rounded-full relative"
      >
        <div className="bg-clockFixed w-full h-full flex flex-col items-center justify-center rounded-full z-20 relative">
          <h3
            className={classNames(
              "text-[80px] md:text-[100px] text-clockText font-bold leading-[115px] -tracking-[4px] md:-tracking-[5px]",
              currentFont ? currentFont : ""
            )}
          >
            {String(minutes).padStart(2, "0") +
              ":" +
              String(seconds).padStart(2, "0")}
          </h3>

          <p
            className={classNames(
              "w-full left-[53%] right-0 bottom-[20%] md:bottom-[25%] transform -translate-x-1/2 -translate-y-1/2 text-clockText text-sm md:text-base font-bold text-center tracking-[15px] transition uppercase absolute",
              currentFont ? currentFont : "",
              currentColor ? currentColor : ""
            )}
          >
            {state === "finished"
              ? "restart"
              : state === "running"
              ? "pause"
              : "start"}
          </p>

          <Progress total={progress <= 0 ? 100 : progress} />
        </div>
      </button>
    </section>
  );
}

export { Clock };
