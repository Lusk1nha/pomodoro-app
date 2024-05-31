import { create } from "zustand";

export type ClockState = "start" | "paused" | "running" | "finished";

export type ClockTypes = "pomodoro" | "shortBreak" | "longBreak";
export type ClockColors = "red" | "green" | "purple";
export type ClockFonts = "KumbhSans" | "RobotoSlab" | "SpaceMono";

export interface IClockStore {
  state: ClockState;

  type: ClockTypes;
  color: ClockColors;
  font: ClockFonts;

  modes: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };

  setType(type: ClockTypes): void;
  setFont(font: ClockFonts): void;
  setColor(color: ClockColors): void;
  setClock({ state, type, font, color }: IClockStore): void;
  setState(state: ClockState): void;
}

export const useClockStore = create<IClockStore>((set) => ({
  state: "paused",

  type: "pomodoro",
  font: "KumbhSans",
  color: "red",

  modes: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },

  setState(state: ClockState) {
    set({ state });
  },

  setType(type: ClockTypes) {
    set({ type });
  },

  setFont(font: ClockFonts) {
    set({ font });
  },

  setColor(color: ClockColors) {
    set({ color });
  },

  setClock(data: IClockStore) {
    set({ ...data });
  },
}));
