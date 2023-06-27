import { FormProvider, useForm } from "react-hook-form";
import { useYupValidationResolver } from "src/hooks/useYupValidationResolver";
import { Answers } from "../../types/Answers";
import { validationSchema } from "./Answers.schema";
import { FindAgentAddress } from "./FindAgentAddress";
import { FindAgentFocus } from "./FindAgentFocus";
import { FindAgentPrice } from "./FindAgentPrice";
import { FindAgentSellPeriod } from "./FindAgentSellPeriod";
import { FindAgentStart } from "./FindAgentStart";
import { ConfigProvider } from "antd";

const steps = [
  FindAgentStart,
  FindAgentSellPeriod,
  FindAgentAddress,
  FindAgentPrice,
  FindAgentFocus
];

export type StepProps = {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (stepNumber: number) => void;
}

export const FindAgentForm: React.FC<StepProps> = (props) => {
  const CurrentStep = steps[props.currentStep];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00d188',
        },
      }}
    >
      <form className="w-full h-full pt-[84px] flex flex-col justify-center items-center">
        <CurrentStep {...props} />
      </form>
    </ConfigProvider>
  );
};
