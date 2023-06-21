import { Checkbox } from 'antd';
import { FindAgentValueButton } from '../../FindAgentValueButton';
import { BoldIcon } from './icons/BoldIcon';
import { BriliantIcon } from './icons/BriliantIcon';
import { BuildingIcon } from './icons/BuildingIcon';
import { FamilyHomeIcon } from './icons/FamilyHomeIcon';
import { FarmIcon } from './icons/FarmIcon';
import { HistoricIcon } from './icons/HistoricIcon';
import { InvestmenIcon } from './icons/InvestmenIcon';
import { LuxuryIcon } from './icons/LuxuryIcon';
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

export const FindAgentFocus = () => {
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What should be the focus of the agent?
      </h4>

      <ul className="w-full grid grid-cols-2 justify-center gap-[20px]">
        {agentFocus.map((item, index) => (
          <li key={item} className="list-none">
            <FindAgentValueButton
              icon={icons[index]}
              onClick={() => { }}
            >
              {item}
            </FindAgentValueButton>
          </li>
        ))}
      </ul>

      <Checkbox onChange={() => { }}>
        Inform matching agents about my search
      </Checkbox>
    </>
  );
};
