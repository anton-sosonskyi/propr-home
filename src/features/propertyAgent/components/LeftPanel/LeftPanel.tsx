import { LeftPanelLayout } from './LeftPanelLayout';

export const stepTitles = [
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

type Props = {
  currentStep: number;
}

export const LeftPanel: React.FC<Props> = ({ currentStep }) => {
  return (
    <LeftPanelLayout>
      <h3 className="text-base text-main font-semibold tracking-wider mb-[14px]">
        {stepTitles[currentStep].subTitle}
      </h3>

      <h1 className="max-w-[20ch] mt-0 text-5xl text-center leading-relaxed font-light">
        {stepTitles[currentStep].title}
      </h1>
    </LeftPanelLayout>
  );
};
