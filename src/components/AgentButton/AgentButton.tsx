import { Button } from 'antd';

type Props = {
  type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined,
  styleClass?: string;
  onClick: () => void,
  children: React.ReactNode,
}

export const AgentButton = ({type, styleClass, onClick, children }: Props) => {
  return (
    <Button
      type={type}
      className={styleClass}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
