import { Answers } from "src/features/propertyAgent/types/Answers";
import { create } from "zustand";

type Store = {
  currentStep: number;
  totalSteps: number;
  next: () => void;
  back: () => void;
  exit: () => void;
  updateAnswers: (name: keyof Answers, value: string | boolean) => void;
  answers: Answers;
}

export const answersInitial: Answers = {
  propertyGoal: "",
  propertyType: "",
  sellPeriod: "",
  address: "",
  price: "",
  agentFocus: "",
  isAgentInform: false,
}

const useStore = create<Store>((set) => ({
  currentStep: 0,
  totalSteps: 4,
  answers: answersInitial,
  next() {
    set((state) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }))
  },
  back() {
    set((state) => ({
      ...state,
      currentStep: state.currentStep - 1,
    }))
  },
  updateAnswers(name, value) {
    set((state) => ({
      ...state,
      answers: {
        ...this.answers,
        [name]: value,
      },
    }))
  },
  exit() {
    set((state) => ({
      ...state,
      currentStep: 0,
      answers: answersInitial,
    }));
  }
}));

export default useStore;