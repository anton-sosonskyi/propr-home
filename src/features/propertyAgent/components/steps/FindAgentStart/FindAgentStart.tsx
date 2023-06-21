import { ConfigProvider } from 'antd';
import { AgentButton } from '../../AgentButton';
import { FindAgentValueButton } from '../../FindAgentValueButton';
import { AppartmentIcon } from './icons/AppartmentIcon';
import { BungaloIcon } from './icons/BungaloIcon';
import { HouseIcon } from './icons/HouseIcon';
import { LandIcon } from './icons/LandIcon';

const icons = [<AppartmentIcon />, <HouseIcon />, <BungaloIcon />, <LandIcon />];
const propertyType = ["Apartment", "House", "Bungalow", "Land to build"];

export const FindAgentStart = () => {
  return (
    <>
      <h1 className="text-5xl font-light text-center leading-[4rem] w-[10ch]">
        My property is for
      </h1>

      <div className="w-[366px] flex rounded-full bg-[#00d188]">
        <AgentButton
          type="ghost"
          styleClass="my-[6px] mx-[8px] py-[14px] px-[20px] basis-1/2 flex justify-center items-center text-sm rounded-full text-lg text-white font-semibold active:bg-[#fff]"
          onClick={() => { }} >
          Sell
        </AgentButton>

        <AgentButton
          type="ghost"
          styleClass="my-[6px] mx-[8px] py-[14px] px-[20px] basis-1/2 flex justify-center items-center text-sm rounded-full text-lg text-white font-semibold active:bg-[#fff]"
          onClick={() => { }} >
          Rent
        </AgentButton>
      </div>

      <h4 className="text-2xl tracking-wider text-[#232b2f]">
        and this property type:
      </h4>

      <div className="mb-[70px] flex flex-wrap justify-center gap-[20px]">
        {propertyType.map((item, index) => (
          <FindAgentValueButton
            icon={icons[index]}
            onClick={() => { }}
          >
            {item}
          </FindAgentValueButton>
        ))}
      </div>

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
          onClick={() => { }} >
          Let’s Continue
        </AgentButton>
      </ConfigProvider>
    </>
  );
};
