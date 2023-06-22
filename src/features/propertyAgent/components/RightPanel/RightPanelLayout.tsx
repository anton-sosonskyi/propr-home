import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { AgentButton } from "../AgentButton";
import useStore from "src/store/store";
import { useMemo } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export const RightPanelLayout = ({ children }: Props) => {
  const store = useStore();
  const stepPercent = useMemo(() => (store.currentStep / store.totalSteps) * 100, [store.currentStep]);
  const handlePrev = () => {
    if (store.currentStep === 0) {
      return;
    }
    store.back()
  }

  const handleNext = () => {
    if (store.currentStep === store.totalSteps) {
      return;
    }

    store.next();
  }

  const isFinalStep = store.currentStep === store.totalSteps;

  return (
    <div className="h-full px-[42px] basis-1/2 flex flex-col justify-center items-center bg-[#f5f5f5] relative">
      {children}

      {store.currentStep > 0 && (
        <>
          <Progress
            percent={stepPercent}
            showInfo={false}
            strokeColor={"#77D2A9"}
            className="mb-[33px]"
          />

          <div className="w-full flex justify-between items-center gap-7">
            <AgentButton
              type="text"
              styleClass="text-base text-[#767676] font-semibold"
              icon={<LeftOutlined rev={undefined} />}
              onClick={handlePrev} >
              Back
            </AgentButton>

            <span className="ml-auto text-base font-normal text-[#00D188]">
              {`step ${store.currentStep}/${store.totalSteps}`}
            </span>

            {isFinalStep ? (
              <AgentButton
                type="default"
                styleClass="py-[10px] px-[20px] flex  justify-center items-center text-sm font-semibold text-[#fff] bg-[#00D188]"
                onClick={() => {}}
              >
                Show matching agents
              </AgentButton>
            ) : (
              <AgentButton
                type="default"
                styleClass="py-[10px] px-[20px] flex  justify-center items-center text-sm font-semibold text-[#999] bg-[#c4c4c4] bg-opacity-40"
                onClick={handleNext} >
                Next
                <RightOutlined rev={undefined} />
              </AgentButton>
            )}
          </div>
        </>
      )}
    </div>
  );
};
