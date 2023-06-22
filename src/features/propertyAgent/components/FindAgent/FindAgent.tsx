import { AgentButton } from "../AgentButton";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";
import useStore from "src/store/store";

export const FindAgent = () => {
  const store = useStore();
  return (
    <div className="h-full flex relative">
      <AgentButton
        type="default"
        styleClass="absolute right-[40px] top-[38px] py-[10px] px-[20px] flex justify-center items-center text-sm rounded-full font-semibold bg-[#c4c4c4] bg-opacity-40 z-10"
        onClick={() => store.exit()} >
        Exit
      </AgentButton>

      <LeftPanel currentStep={store.currentStep} />
      <RightPanel />
    </div>
  );
};
