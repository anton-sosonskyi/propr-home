import { Logo } from '../Logo';

export const LeftPanel = () => {
  return (
    <div className="h-full basis-1/2 flex flex-col justify-center items-center bg-[#f5bf41] bg-opacity-40 relative">
      <div className="absolute left-[44px] top-[27px]">
        <Logo />
      </div>

      <h3 className="text-base text-main font-semibold tracking-wider mb-[14px]">
        ProprHome supports you!
      </h3>

      <h1 className="max-w-[20ch] mt-0 text-5xl text-center leading-relaxed font-light">
        Find the best agent for your property
      </h1>

      <img src="src/assets/house.svg" alt="house" />
    </div>
  );
};
