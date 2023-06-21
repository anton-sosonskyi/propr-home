import { create } from "zustand";

type Store = {
  currentStep: number;

}

const useStore = create<Store>((set) => ({
  currentStep: 0,

}));