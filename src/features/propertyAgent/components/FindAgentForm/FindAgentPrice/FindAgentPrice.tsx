import { Radio, RadioChangeEvent } from 'antd';
import { FindAgentValueButton } from '../../FindAgentValueButton';
import { StepProps } from '../FindAgentForm';
import { FindAgentStepNavigation } from '../FindAgentStepNavigation/FindAgentStepNavigation';
import { FiveMedalIcon } from './icons/FiveMedalIcon';
import { FourMedalIcon } from './icons/FourMedalIcon';
import { SixMedalIcon } from './icons/SixMedalIcon';
import { TheroMedalIcon } from './icons/TheroMedalIcon';
import { ThreeMedalIcon } from './icons/ThreeMedalIcon';
import { TwoMedalIcon } from './icons/TwoMedalIcon';
import { useController, useFormContext } from 'react-hook-form';
import { Answers } from 'src/features/propertyAgent/types/Answers';
import { CustomRadioButton } from '../../CustomRadioButton';

const icons = [
  <TheroMedalIcon />,
  <TwoMedalIcon />,
  <ThreeMedalIcon />,
  <FourMedalIcon />,
  <FiveMedalIcon />,
  <SixMedalIcon />
];

const price = ["€ 300K or less", "€ 301K – € 500K", "€ 501K – € 600K", "€ 601K – € 900K", "€ 901K – € 1.2 M", "€ 1.2 M or more"];

export const FindAgentPrice: React.FC<StepProps> = (props) => {
  const { setCurrentStep, currentStep } = props;
  const controller = useController({ name: "price" });
  const { watch, getValues } = useFormContext();
  const [propertyPrice] = watch(['price']);

  const handleChange = ({ target: { value } }: RadioChangeEvent) => {
    controller.field.onChange(value);
  }
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What price do you think your property will sell for?
      </h4>

      <Radio.Group
      onChange={handleChange}
      className="w-full mb-[70px] grid grid-cols-2 justify-center gap-[20px]">
        {price.map((item, index) => (
          <li key={item} className="list-none">
           <CustomRadioButton
              value={item}
              label={item}
              icon={icons[index]}
              isActive={propertyPrice === item}
            />
          </li>
        ))}
      </Radio.Group>

      <FindAgentStepNavigation
        {...props}
        isNextDisabled={getValues("price")  === ''}
      />
    </>
  );
};
