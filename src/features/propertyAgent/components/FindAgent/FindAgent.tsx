import { useCallback, useState } from "react";
import { AgentButton } from "../AgentButton";
import { FindAgentForm } from "../FindAgentForm";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";

export const FindAgent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = useCallback(
    (stepNumber: number) => setCurrentStep(stepNumber),
    []
  );

  return (
    <div className="h-full flex flex-wrap relative">
      <AgentButton
        type="default"
        styleClass="absolute right-[40px] top-[38px] py-[10px] px-[20px] flex justify-center items-center text-sm rounded-full font-semibold bg-[#c4c4c4] bg-opacity-40 z-10"
        onClick={() => {
          window.location.reload();
        }}
      >
        Exit
      </AgentButton>

      <LeftPanel currentStep={currentStep} />

      <RightPanel>
        <FindAgentForm
          currentStep={currentStep}
          totalSteps={4}
          setCurrentStep={handleStepChange}
        />
      </RightPanel>
    </div>
  );
};
