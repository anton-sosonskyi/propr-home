import { FindAgentValueButton } from "../../FindAgentValueButton";
import { FourMonthIcon } from "./icons/FourMonthIcon";
import { ListedIcon } from "./icons/ListedIcon";
import { OneMonthIcon } from "./icons/OneMonthIcon";
import { RightAwayIcon } from "./icons/RightAwayIcon";

const icons = [<RightAwayIcon />, <OneMonthIcon />, <FourMonthIcon />, <ListedIcon />];
const sellPeriod = ["Right away", "1-3 Months", "4+ Months", "Already Listed"];

export const FindAgentSellPeriod = () => {
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        How fast are you planning to sell?
      </h4>

      <ul className="mb-[70px] flex flex-wrap justify-center gap-[20px]">
        {sellPeriod.map((item, index) => (
          <li key={item} className="w-full list-none">
            <FindAgentValueButton
              icon={icons[index]}
              onClick={() => { }}
              isArrow
            >
              {item}
            </FindAgentValueButton>
          </li>
        ))}
      </ul>
    </>
  );
};
