import { LeftPanelLayout } from './LeftPanelLayout';

type Props = {
  subTitle: string;
  title: string;
}

export const LeftPanel: React.FC<Props> = ({ subTitle, title }) => {
  return (
    <LeftPanelLayout>
       <h3 className="text-base text-main font-semibold tracking-wider mb-[14px]">
        {subTitle}
      </h3>

      <h1 className="max-w-[20ch] mt-0 text-5xl text-center leading-relaxed font-light">
        {title}
      </h1>
    </LeftPanelLayout>
  );
};
