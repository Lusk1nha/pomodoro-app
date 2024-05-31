import classNames from "classnames";
import { useClockStore } from "../../shared/stores/clock-store";
import { useEffect, useState } from "react";

let interval: any;

function Clock() {
  const { state, type, modes, font, color, setState } = useClockStore();

  const [count, setCount] = useState<number>((modes as any)[type] - 1);

  const [seconds, setSeconds] = useState<number>(59);

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

  useEffect(() => {
    const newCount = (modes as any)[type];
    setCount(newCount - 1);
  }, [type, modes]);

  useEffect(() => {
    if (state === "running") {
      interval = setInterval(() => {
        if (count === 0 && seconds === 0) {
          setState("finished");
          return () => clearInterval(interval);
        }

        if (seconds === 0) {
          setCount((c) => c - 1);
          setSeconds(59);
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }

    if (state === "paused" || state === "finished") {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state, seconds, count]);

  function handleState() {
    if (state === "running") {
      return setState("paused");
    }

    if (state === "finished") {
      setCount((modes as any)[type] - 1);
      return setState("running");
    }

    setState("running");
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
            {String(count).padStart(2, "0") +
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
              ? "Pause"
              : "start"}
          </p>
        </div>
      </button>
    </section>
  );
}

export { Clock };
