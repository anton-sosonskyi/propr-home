import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';

type Props = {
  children: React.ReactNode;
  icon: JSX.Element;
  onClick: () => void;
  isArrow?: boolean;
  isActive: boolean;
}

export const FindAgentValueButton: React.FC<Props> = ({
  children,
  onClick,
  icon,
  isArrow,
  isActive,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00d188',
        },
      }}
    >
      <Button
        className="w-full py-10 flex justify-start items-center gap-[18px] text-base text-[#232b2f] tracking-wider bg-[#fff] font-semibold border border-[#c4c4c4] rounded-lg"
        onClick={onClick}
      >
        <div className={`flex w-[50px] h-[50px] justify-center items-center ${isActive ? "bg-[#00d188]" : "bg-[#d9d8d8]"} bg-opacity-50 rounded-full`}>
          {icon}
        </div>

        <span>
          {children}
        </span>

        {isArrow && (
          <span className="ml-auto">
            <RightOutlined rev={undefined} />
          </span>
        )}
      </Button>
    </ConfigProvider>
  );
};
