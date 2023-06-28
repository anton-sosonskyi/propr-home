import { Checkbox, Radio, RadioChangeEvent } from 'antd';
import { BoldIcon } from './icons/BoldIcon';
import { BriliantIcon } from './icons/BriliantIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { FamilyHomeIcon } from './icons/FamilyHomeIcon';
import { FarmIcon } from './icons/FarmIcon';
import { HistoricIcon } from './icons/HistoricIcon';
import { InvestmenIcon } from './icons/InvestmenIcon';
import { LuxuryIcon } from './icons/LuxuryIcon';
import { useController } from 'react-hook-form';
import { FindAgentStepNavigation } from '../FindAgentStepNavigation/FindAgentStepNavigation';
import { StepProps } from '../FindAgentForm';
import { CustomRadioButton } from '../../CustomRadioButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useCallback } from 'react';
import { AgentButton } from '../../AgentButton';

const agentFocus = [
  "Family Homes Specialist",
  "Investement Specialist",
  "Quinta/Farm Specialist",
  "Building Specialist",
  "Luxury Property Specialist",
  "Bold Deals Specialist",
  "Historic Building Specialist",
  "Non of those Just a brilliant agent"
];

const icons = [
  <FamilyHomeIcon />,
  <InvestmenIcon />,
  <FarmIcon />,
  <BuildingIcon />,
  <LuxuryIcon />,
  <BoldIcon />,
  <HistoricIcon />,
  <BriliantIcon />,
];

export const FindAgentFocus: React.FC<StepProps> = (props) => {
  const agentFocusController = useController({ name: "agentFocus" });
  const agentInformController = useController({ name: "isAgentInform" });

  const handleClick = useCallback(({ target: { value } }: RadioChangeEvent) => (
    agentFocusController.field.onChange(value)), []);


  const handleCheckboxChange = useCallback((event: CheckboxChangeEvent) => (
    agentInformController.field.onChange(event.target.checked)), []);

  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What should be the focus of the agent?
      </h4>

      <Radio.Group
        onChange={handleClick}
        className="w-full flex flex-wrap justify-center gap-[20px]">
        {agentFocus.map((item, index) => (
          <li key={item} className="list-none w-[298px]">
            <CustomRadioButton
              value={item}
              label={item}
              icon={icons[index]}
              isActive={agentFocusController.field.value === item}
            />
          </li>
        ))}
      </Radio.Group>

      <div className="w-full pt-[20px] xl:pl-[128px]">
        <Checkbox
          name="isAgentInform"
          onChange={handleCheckboxChange}
          checked={agentInformController.field.value}
          className="text-base"
        >
          Inform matching agents about my search
        </Checkbox>
      </div>

      <FindAgentStepNavigation
        {...props}
        renderNextButton={({ onClick }) => (
          <AgentButton
            type="default"
            disabled={agentFocusController.field.value === ""}
            styleClass="py-[18px] px-[20px] flex justify-center items-center text-lg font-semibold hover:text-white text-white bg-green"
            onClick={onClick} >
            Show matching agents
          </AgentButton>
        )}
        isNextDisabled={agentFocusController.field.value === ""}
      />
    </>
  );
};
