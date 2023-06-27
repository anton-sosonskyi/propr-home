import { Checkbox, Radio, RadioChangeEvent } from 'antd';
import { BoldIcon } from './icons/BoldIcon';
import { BriliantIcon } from './icons/BriliantIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { FamilyHomeIcon } from './icons/FamilyHomeIcon';
import { FarmIcon } from './icons/FarmIcon';
import { HistoricIcon } from './icons/HistoricIcon';
import { InvestmenIcon } from './icons/InvestmenIcon';
import { LuxuryIcon } from './icons/LuxuryIcon';
import { Controller, useController, useFormContext } from 'react-hook-form';
import { FindAgentStepNavigation } from '../FindAgentStepNavigation/FindAgentStepNavigation';
import { StepProps } from '../FindAgentForm';
import { CustomRadioButton } from '../../CustomRadioButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

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
  const { watch, control, getValues } = useFormContext();
  const [propertyAgentFocus] = watch(['agentFocus']);

  const handleClick = ({ target: { value } }: RadioChangeEvent) => {
    agentFocusController.field.onChange(value);
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    agentInformController.field.onChange(event.target.checked);
  }

  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What should be the focus of the agent?
      </h4>

      <Radio.Group
        onChange={handleClick}
        className="w-full grid grid-cols-2 justify-center gap-[20px]">
        {agentFocus.map((item, index) => (
          <li key={item} className="list-none">
            <CustomRadioButton
              value={item}
              label={item}
              icon={icons[index]}
              isActive={propertyAgentFocus === item}
            />
          </li>
        ))}
      </Radio.Group>

      <div className="w-full pt-[20px]">
      <Controller
        control={control}
        name="isAgentInform"
        render={({
          field: { value },
        }) => (
          <Checkbox
            onChange={handleCheckboxChange}
            checked={value}
            className="text-base"
          >
            Inform matching agents about my search
          </Checkbox>
        )}
      />
      </div>


      <FindAgentStepNavigation
        {...props}
        hideNextButton
        isNextDisabled={getValues("agentFocus") === ""}
      />
    </>
  );
};
