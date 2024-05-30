import { SettingsIcon } from "../../shared/assets/SettingsIcon";

interface ISettingsButtonProps {
  onOpen: () => void;
}

function SettingsButton(props: ISettingsButtonProps) {
  const { onOpen } = props;

  return (
    <div className="flex items-center justify-center pt-10">
      <button
        aria-label="Open settings modal"
        title="Click to open settings modal"
        className="w-7 h-7  fill-settingsText hover:fill-settingsHoverText transition"
        type="button"
        onClick={onOpen}
      >
        <SettingsIcon />
      </button>
    </div>
  );
}

export { SettingsButton };
