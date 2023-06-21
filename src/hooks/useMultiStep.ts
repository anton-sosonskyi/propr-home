import { ReactElement, useState } from 'react';

export const useMultiStep = (steps: ReactElement[]) => {
  const [stepIndex, setStepIndex] = useState(0);

  function next() {
    setStepIndex((current) => {
      if (current >= steps.length - 1) {
        return current;
      }

      return current + 1;
    });
  }

  function back() {
    setStepIndex((current) => {
      if (current <= 0) {
        return current;
      }
      return current - 1;
    });
  }

  return {
    stepIndex,
    step: steps[stepIndex],
    steps,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
    next,
    back,
  };
};