import { Logo } from 'src/components/Logo'

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export const LeftPanelLayout = ({ children }: Props) => {
  return (
    <div className="h-full basis-1/2 flex flex-col justify-center items-center bg-[#f5bf41] bg-opacity-40 relative">
      <div className="absolute left-[44px] top-[27px]">
        <Logo />
      </div>

      {children}

      <img src="house.svg" alt="house" />
    </div>
  );
};
