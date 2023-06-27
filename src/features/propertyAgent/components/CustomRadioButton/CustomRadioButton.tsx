import { RightOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import './customRadio.css';

type Props = {
  value: string;
  label?: string;
  icon?: JSX.Element;
  isActive: boolean;
  isArrow?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const CustomRadioButton: React.FC<Props> = ({ value, icon, label, isActive, isArrow }) => {
  return (
    <Radio.Button
      value={value}
      checked={isActive}
      className={`py-10 relative flex items-center text-base text-[#232b2f] tracking-wider bg-[#fff] font-semibold border rounded-lg hover:border-green ${isActive ? "border-green" : "border-[#c4c4c4]"} `}
    >
      <div className="grow flex items-center gap-[18px]">
        <div className={`flex w-[50px] h-[50px] justify-center items-center ${isActive ? "bg-green" : "bg-[#d9d8d8]"} bg-opacity-50 rounded-full`}>
          {icon}
        </div>

        <span>
          {label}
        </span>

        {isArrow && (
          <span className="absolute right-[18px]">
            <RightOutlined rev={undefined} />
          </span>
        )}
      </div>
    </Radio.Button>
  );
};
