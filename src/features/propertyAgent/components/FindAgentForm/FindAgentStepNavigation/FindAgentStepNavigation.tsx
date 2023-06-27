import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
import React from 'react';
import { AgentButton } from '../../AgentButton';
import { StepProps } from '../FindAgentForm';

type Props = StepProps & {
  renderNextButton?: (params: { onClick: VoidFunction }) => JSX.Element;
  isNextDisabled?: boolean;
  hideNextButton?: boolean;
}

export const FindAgentStepNavigation: React.FC<Props> = ({
  currentStep,
  totalSteps,
  setCurrentStep,
  renderNextButton,
  hideNextButton,
  isNextDisabled,
}) => {
  const handleNext = () => {
    if (currentStep === totalSteps) {
      return;
    }
    
    setCurrentStep(++currentStep);
  }

  const handlePrev = () => {
    setCurrentStep(--currentStep);
  }

  const stepPercent = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full mt-auto mb-[30px]">
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
          {`step ${currentStep}/${totalSteps}`}
        </span>

        {!hideNextButton && !renderNextButton && (
          <AgentButton
            type="default"
            disabled={isNextDisabled}
            styleClass={`py-[18px] px-[20px] flex justify-center items-center text-lg font-semibold text-white bg-green `}
            onClick={handleNext} >
            Next
            <RightOutlined rev={undefined} />
          </AgentButton>
        )}

        {hideNextButton && (currentStep === totalSteps) && (
          <AgentButton
            type="default"
            disabled={isNextDisabled}
            styleClass="py-[18px] px-[20px] flex justify-center items-center text-lg font-semibold hover:text-white text-white bg-green"
            onClick={handleNext} >
            Show matching agents
          </AgentButton>
        )}

        {!hideNextButton && renderNextButton && (
          renderNextButton({ onClick: handleNext })
        )}
      </div>
    </div>
  );
};
