import { create } from "zustand";

export type ModalsNames = "settings";

export interface IModalStore {
  currentModalName: ModalsNames | null;
  isOpen: boolean;
  openModal(name: ModalsNames): void;
  closeModal(): void;
}

export const useModalStore = create<IModalStore>((set) => ({
  currentModalName: null,
  isOpen: false,
  openModal(name: ModalsNames) {
    set({ currentModalName: name, isOpen: true });
  },
  closeModal() {
    set({ currentModalName: null, isOpen: false });
  },
}));
