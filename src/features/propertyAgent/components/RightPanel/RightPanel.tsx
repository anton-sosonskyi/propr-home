type Props = {
  children: JSX.Element | JSX.Element[];
}

export const RightPanel: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen px-[42px] basis-1/2 flex flex-col justify-center items-center bg-[#f5f5f5] relative">
      {children}
    </div>
  );
};
