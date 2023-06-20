import { AgentButton } from "../AgentButton";

export const RightPanel = () => {
  return (
    <div className="h-full basis-1/2 flex flex-col justify-center items-center bg-[#f5f5f5] relative">
      <AgentButton
        type="default"
        styleClass="absolute right-[40px] top-[38px] py-[10px] px-[20px] flex  justify-center items-center text-sm rounded-full font-semibold bg-[#c4c4c4] bg-opacity-40"
        onClick={() => {}} >
        Exit
      </AgentButton>
    </div>
  );
};
