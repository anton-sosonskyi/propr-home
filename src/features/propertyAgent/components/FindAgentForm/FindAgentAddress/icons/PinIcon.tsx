type Props = {
  className?: string;
}

export const PinIcon: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_434_650)">
          <path d="M15.2062 9.09772C15.2082 7.35802 13.7996 5.9461 12.0599 5.9441C10.3202 5.9421 8.90825 7.35078 8.90625 9.09048C8.90425 10.8302 10.3129 12.2421 12.0526 12.2441C13.7923 12.2461 15.2042 10.8374 15.2062 9.09772Z" stroke="#00D188" strokeWidth="1.12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.4 13.5C4.5 12.3 4.05 10.65 4.05 9.15001C4.05 4.80001 7.65 1.20001 12 1.20001C16.35 1.20001 19.95 4.80001 19.95 9.15001C19.95 10.8 19.5 12.3 18.6 13.5C18.6 13.5 15.15 19.05 13.2 22.2C12.9 22.65 12.45 22.95 12 22.95C11.55 22.95 10.95 22.65 10.8 22.2C8.85 19.05 5.4 13.5 5.4 13.5Z" stroke="#00D188" strokeWidth="1.12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_434_650">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
