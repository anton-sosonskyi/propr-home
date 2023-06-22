import useStore, { answersInitial } from "src/store/store";
import { FindAgentAddress } from "../steps/FindAgentAddress";
import { FindAgentFocus } from "../steps/FindAgentFocus";
import { FindAgentPrice } from "../steps/FindAgentPrice";
import { FindAgentSellPeriod } from "../steps/FindAgentSellPeriod";
import { FindAgentStart } from "../steps/FindAgentStart";
import { RightPanelLayout } from "./RightPanelLayout";
import { FormProvider, useForm } from "react-hook-form";
import { useYupValidationResolver } from "src/hooks/useYupValidationResolver";
import { validationSchema } from "./Answers.schema";
import { Answers } from "../../types/Answers";

const steps = [
  <FindAgentStart />,
  <FindAgentSellPeriod />,
  <FindAgentAddress />,
  <FindAgentPrice />,
  <FindAgentFocus />
];

export const RightPanel = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const store = useStore();
  const methods = useForm<Answers>({resolver});
  return (
    <FormProvider {...methods} >
      <RightPanelLayout>
        {steps[store.currentStep]}
      </RightPanelLayout>
    </FormProvider>
  );
};
