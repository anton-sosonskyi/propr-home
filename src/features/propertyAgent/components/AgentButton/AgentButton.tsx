import { Button } from 'antd';

type Props = {
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
  styleClass?: string;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const AgentButton: React.FC<Props> = ({type, styleClass, onClick, children, icon, disabled }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={styleClass}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
