import classNames from "classnames";
import { useClockStore } from "../../shared/stores/clock-store";

function Signature() {
  const { color, font } = useClockStore();

  const fonts = {
    KumbhSans: "font-KumbhSans",
    RobotoSlab: "font-RobotoSlab",
    SpaceMono: "font-SpaceMono",
  };

  const colors = {
    red: "text-redPrimary",
    green: "text-greenPrimary",
    purple: "text-purplePrimary",
  };

  const currentColor = colors[color];
  const currentFont = fonts[font];

  return (
    <p className="text-title font-medium">
      Developed by{" "}
      <a
        className={classNames(
          "font-bold hover:underline",
          currentColor ? currentColor : "",
          currentFont ? currentFont : ""
        )}
        href="https://www.linkedin.com/in/olucaspedro/"
        target="_blank"
      >
        Lucas Pedro
      </a>
    </p>
  );
}

export { Signature };
