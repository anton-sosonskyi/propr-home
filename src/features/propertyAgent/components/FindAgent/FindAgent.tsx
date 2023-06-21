import { useMultiStep } from "src/hooks/useMultiStep";
import { AgentButton } from "../AgentButton";
import { LeftPanel } from "../LeftPanel";
import { RightPanel } from "../RightPanel";

export const leftPanelData = [
  {
    subTitle: "ProprHome supports you!",
    title: "Find the best agent for your property",
  },
  {
    subTitle: "Find the best agent to sell your property",
    title: "Let’s start with the selling speed",
  },
  {
    subTitle: "Find the best agent to sell your property",
    title: "Tell us the location please",
  },
  {
    subTitle: "Find the best agent to sell your property",
    title: "What’s your property worth?",
  },
  {
    subTitle: "Find the best agent to sell your property",
    title: "Let’s start with the selling speed",
  },
];

export const rightPanelData = [
  {
    propertyType: ["Apartment", "House", "Bungalow", "Land to build"],
    sellPeriod: ["Right away", "1-3 Months", "4+ Months", "Already Listed"],
    address: "",
    price: ["€ 300K or less", "€ 301K – € 500K", "€ 501K – € 600K", "€ 601K – € 900K", "€ 901K – € 1.2 M", "€ 1.2 M or more"],
    agentFocus: ["Family Homes Specialist", "Investement Specialist", "Quinta/Farm Specialist", "Building Specialist", "Luxury Property Specialist", "Bold Deals Specialist", "Historic Building Specialist", "Non of those Just a brilliant agent"],
  }
];

export const FindAgent = () => {
  const { step, isFirstStep, isLastStep, back, next } = useMultiStep(
    [
     
    ]
  );

  return (
    <div className="h-full flex relative">
      <AgentButton
        type="default"
        styleClass="absolute right-[40px] top-[38px] py-[10px] px-[20px] flex justify-center items-center text-sm rounded-full font-semibold bg-[#c4c4c4] bg-opacity-40 z-10"
        onClick={() => {}} >
        Exit
      </AgentButton>

      <LeftPanel subTitle={leftPanelData[0].subTitle} title={leftPanelData[0].title} />
      <RightPanel />
    </div>
  );
};
