import useStore from 'src/store/store';
import { FindAgentValueButton } from '../../FindAgentValueButton';
import { FiveMedalIcon } from './icons/FiveMedalIcon';
import { FourMedalIcon } from './icons/FourMedalIcon';
import { SixMedalIcon } from './icons/SixMedalIcon';
import { TheroMedalIcon } from './icons/TheroMedalIcon';
import { ThreeMedalIcon } from './icons/ThreeMedalIcon';
import { TwoMedalIcon } from './icons/TwoMedalIcon';
import { useFormContext } from 'react-hook-form';
import { Answers } from 'src/features/propertyAgent/types/Answers';

const icons = [
  <TheroMedalIcon />,
  <TwoMedalIcon />,
  <ThreeMedalIcon />,
  <FourMedalIcon />,
  <FiveMedalIcon />,
  <SixMedalIcon />
];

const price = ["€ 300K or less", "€ 301K – € 500K", "€ 501K – € 600K", "€ 601K – € 900K", "€ 901K – € 1.2 M", "€ 1.2 M or more"];

export const FindAgentPrice = () => {
  const store = useStore();
  const { setValue } = useFormContext();

  const handleClick = (name: string, value: string) => {
    setValue(name, value);
    store.updateAnswers(name as keyof Answers, value);
  }
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What price do you think your property will sell for?
      </h4>

      <ul className="w-full mb-[70px] grid grid-cols-2 justify-center gap-[20px]">
        {price.map((item, index) => (
          <li key={item} className="list-none">
            <FindAgentValueButton
              icon={icons[index]}
              onClick={() => handleClick("price", item)}
              isActive={store.answers.price === item}
            >
              {item}
            </FindAgentValueButton>
          </li>
        ))}
      </ul>
    </>
  );
};
