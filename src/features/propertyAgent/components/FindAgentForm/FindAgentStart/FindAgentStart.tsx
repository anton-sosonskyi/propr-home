import { Radio, RadioChangeEvent } from 'antd';
import { useController, useFormContext } from 'react-hook-form';
import { AgentButton } from '../../AgentButton';
import { AppartmentIcon } from './icons/AppartmentIcon';
import { BungaloIcon } from './icons/BungaloIcon';
import { HouseIcon } from './icons/HouseIcon';
import { LandIcon } from './icons/LandIcon';
import { CustomRadioButton } from '../../CustomRadioButton';
import { StepProps } from '../FindAgentForm';

const icons = [<AppartmentIcon />, <HouseIcon />, <BungaloIcon />, <LandIcon />];
const propertyGoals = ["Sell", "Rent"]
const propertyTypes = ["Apartment", "House", "Bungalow", "Land to build"];

export const FindAgentStart: React.FC<StepProps> = (props) => {
  const { setCurrentStep, currentStep } = props;
  const propertyGoalController = useController({ name: "propertyGoal" });
  const propertyTypeController = useController({ name: "propertyType" });
  const { watch, getValues } = useFormContext();

  const [propertyGoalField, propertyTypeField] = watch(['propertyGoal', 'propertyType']);

  const handleTypeChange = ({ target: { value } }: RadioChangeEvent) => {
    propertyTypeController.field.onChange(value);
  }

  const handleGoalChange = ({ target: { value } }: RadioChangeEvent) => {
    propertyGoalController.field.onChange(value);
  }

  const isDisabled = (getValues("propertyType") === "") && (getValues("propertyGoal") === "");

  return (
    <>
      <h1 className="text-5xl font-light text-center leading-[4rem] w-[10ch]">
        My property is for
      </h1>

      <Radio.Group
        onChange={handleGoalChange}
        className="min-w-[366px] flex bg-green rounded-full"
      >
        {propertyGoals.map((item) => (
          <li key={item} className="w-full list-none flex justify-center rounded-full">
            <Radio.Button
              value={item}
              checked={propertyGoalField === item}
              style={{borderRadius: "20px"}}
              className={`${"button-toggle"} w-full my-[6px] mx-[6px] flex justify-center hover:text-white text-lg border-green  ${propertyGoalField === item ? "bg-white" : "bg-green text-white"}`}
            >
              {item}
            </Radio.Button>
          </li>
        ))}
      </Radio.Group>

      <h4 className="text-2xl tracking-wider text-[#232b2f]">
        and this property type:
      </h4>

      <Radio.Group
        onChange={handleTypeChange}
        className="w-full mb-[70px] flex flex-wrap justify-center gap-[20px]"
      >
        {propertyTypes.map((item, index) => (
          <li key={item} className="w-[298px] list-none">
            <CustomRadioButton
              value={item}
              label={item}
              icon={icons[index]}
              isActive={propertyTypeField === item}
            />
          </li>
        ))}
      </Radio.Group>

      <AgentButton
        type="ghost"
        disabled={isDisabled}
        styleClass={`py-6 px-[20px] flex justify-center items-center text-lg  rounded-full font-semibold  ${isDisabled ? "border-[#777] text-grey" : "text-green border-green"}`}
        onClick={() => setCurrentStep(currentStep + 1)} >
        Let’s Continue
      </AgentButton>
    </>
  );
};
