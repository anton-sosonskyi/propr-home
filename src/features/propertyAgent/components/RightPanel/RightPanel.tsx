import { RightPanelLayout } from "./RightPanelLayout";

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const RightPanel: React.FC<Props> = ({ children }) => {
  return (
    <RightPanelLayout>
      {children}
    </RightPanelLayout>
  );
};
