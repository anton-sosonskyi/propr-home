import { Radio, RadioChangeEvent } from "antd";
import { CustomRadioButton } from "../../CustomRadioButton";
import { StepProps } from "../FindAgentForm";
import { FindAgentStepNavigation } from "../FindAgentStepNavigation/FindAgentStepNavigation";
import { FourMonthIcon } from "./icons/FourMonthIcon";
import { ListedIcon } from "./icons/ListedIcon";
import { OneMonthIcon } from "./icons/OneMonthIcon";
import { RightAwayIcon } from "./icons/RightAwayIcon";
import { useController } from "react-hook-form";
import { useCallback } from "react";

const icons = [<RightAwayIcon />, <OneMonthIcon />, <FourMonthIcon />, <ListedIcon />];
const sellPeriod = ["Right away", "1-3 Months", "4+ Months", "Already Listed"];

export const FindAgentSellPeriod: React.FC<StepProps> = (props) => {
  const { setCurrentStep, currentStep } = props;
  const controller = useController({ name: "sellPeriod" });

  const handleClick = useCallback(({ target: { value } }: RadioChangeEvent) => {
    controller.field.onChange(value);
    setCurrentStep(currentStep + 1);
  }, []);

  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        How fast are you planning to sell?
      </h4>

      <Radio.Group
        onChange={handleClick}
        className="mb-[70px] flex flex-wrap justify-center gap-[20px]"
      >
        {sellPeriod.map((item, index) => (
          <li key={item} className="w-full list-none">
            <CustomRadioButton
              value={item}
              label={item}
              icon={icons[index]}
              isActive={controller.field.value === item}
              isArrow
            />
          </li>
        ))}
      </Radio.Group>

      <FindAgentStepNavigation
        {...props}
        hideNextButton
      />
    </>
  );
};
