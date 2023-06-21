import { Progress } from "antd";
import { AgentButton } from "../AgentButton";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export const RightPanelLayout = ({ children }: Props) => {
  return (
    <div className="h-full px-[42px] basis-1/2 flex flex-col justify-center items-center bg-[#f5f5f5] relative">
      {children}

      <Progress
        percent={25}
        showInfo={false}
        strokeColor={"#77D2A9"}
        className="mb-[33px]"
      />

      <div className="w-full flex justify-between items-center gap-7">
        <AgentButton
          type="text"
          styleClass="text-base text-[#767676] font-semibold"
          icon={<LeftOutlined rev={undefined} />}
          onClick={() => { }} >
          Back
        </AgentButton>

        <span className="ml-auto text-base font-normal text-[#00D188]">
          step 2/4
        </span>

        <AgentButton
          type="default"
          styleClass="py-[10px] px-[20px] flex  justify-center items-center text-sm font-semibold text-[#999] bg-[#c4c4c4] bg-opacity-40"
          onClick={() => { }} >
          Next
          <RightOutlined rev={undefined} />
        </AgentButton>
      </div>
    </div>
  );
};
