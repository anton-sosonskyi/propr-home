import { Button } from 'antd';

type Props = {
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
  styleClass?: string;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const AgentButton = ({type, styleClass, onClick, children, icon }: Props) => {
  return (
    <Button
      type={type}
      className={styleClass}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
