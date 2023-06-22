import { ConfigProvider } from 'antd';
import { AgentButton } from '../../AgentButton';
import { FindAgentValueButton } from '../../FindAgentValueButton';
import { AppartmentIcon } from './icons/AppartmentIcon';
import { BungaloIcon } from './icons/BungaloIcon';
import { HouseIcon } from './icons/HouseIcon';
import { LandIcon } from './icons/LandIcon';
import useStore from 'src/store/store';
import { useFormContext } from 'react-hook-form';
import { Answers } from 'src/features/propertyAgent/types/Answers';

const icons = [<AppartmentIcon />, <HouseIcon />, <BungaloIcon />, <LandIcon />];
const propertyGoal = ["Sell", "Rent"]
const propertyType = ["Apartment", "House", "Bungalow", "Land to build"];

export const FindAgentStart = () => {
  const store = useStore();
  const { setValue } = useFormContext();
  
  const handleClick = (name: string, value: string) => {
    setValue(name, value);
    store.updateAnswers(name as keyof Answers, value);
  }
  

  return (
    <>
      <h1 className="text-5xl font-light text-center leading-[4rem] w-[10ch]">
        My property is for
      </h1>

      <ul className="pl-0 w-[366px] flex rounded-full bg-[#00d188]">
        {propertyGoal.map((item) => (
          <li key={item} className="w-full list-none flex justify-center">
            <AgentButton
              type="ghost"
              styleClass={`my-[6px] mx-[8px] py-[14px] px-[20px] basis-1/2 flex justify-center items-center text-sm rounded-full text-lg  font-semibold ${store.answers.propertyGoal === item ? "bg-[#fff] text-[#00d188]" : "bg-transparent text-[#fff]"}`}
              onClick={() => handleClick("propertyGoal", item)} >
              {item}
            </AgentButton>
          </li>
        ))}
      </ul>

      <h4 className="text-2xl tracking-wider text-[#232b2f]">
        and this property type:
      </h4>

      <ul className="w-full pl-0 mb-[70px] grid grid-cols-2 justify-center gap-[20px]">
        {propertyType.map((item, index) => (
          <li key={item} className="w-full list-none">
            <FindAgentValueButton
              icon={icons[index]}
              onClick={() => handleClick("propertyType", item)}
              isActive={store.answers.propertyType === item}
            >
              {item}
            </FindAgentValueButton>
          </li>
        ))}
      </ul>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00d188',
          },
        }}
      >
        <AgentButton
          type="ghost"
          styleClass="py-6 px-[20px] flex justify-center items-center text-sm text-[#00d188] rounded-full font-semibold border-[#00d188]"
          onClick={() => store.next()} >
          Let’s Continue
        </AgentButton>
      </ConfigProvider>
    </>
  );
};
