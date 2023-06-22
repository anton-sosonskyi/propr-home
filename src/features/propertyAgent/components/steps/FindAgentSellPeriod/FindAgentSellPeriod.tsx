
import useStore from "src/store/store";
import { FindAgentValueButton } from "../../FindAgentValueButton";
import { FourMonthIcon } from "./icons/FourMonthIcon";
import { ListedIcon } from "./icons/ListedIcon";
import { OneMonthIcon } from "./icons/OneMonthIcon";
import { RightAwayIcon } from "./icons/RightAwayIcon";
import { useFormContext } from "react-hook-form";
import { Answers } from "src/features/propertyAgent/types/Answers";

const icons = [<RightAwayIcon />, <OneMonthIcon />, <FourMonthIcon />, <ListedIcon />];
const sellPeriod = ["Right away", "1-3 Months", "4+ Months", "Already Listed"];

export const FindAgentSellPeriod = () => {
  const store = useStore();
  const { setValue } = useFormContext();
  
  const handleClick = (name: string, value: string) => {
    setValue(name, value);
    store.updateAnswers(name as keyof Answers, value);
  }
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
              onClick={() => handleClick("sellPeriod", item)}
              isActive={store.answers.sellPeriod === item}
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
