import React from 'react';

export interface IconProps {
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const MailSVG: React.FC<IconProps> = ({ fill = '#12F7D6', height = 14, width = 14, style }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        style={style}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.583361 3.48988C0.583267 3.49564 0.583257 3.50139 0.583333 3.50715V10.5C0.583333 11.4638 1.3695 12.25 2.33333 12.25H11.6667C12.6305 12.25 13.4167 11.4638 13.4167 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6667 1.75H2.33333C1.37287 1.75 0.588839 2.53067 0.583361 3.48988ZM1.81217 3.2398C1.90864 3.04904 2.10702 2.91667 2.33333 2.91667H11.6667C11.893 2.91667 12.0914 3.04904 12.1878 3.2398L7 6.87128L1.81217 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9862 11.0833 11.6667 11.0833H2.33333C2.01383 11.0833 1.75 10.8195 1.75 10.5V4.62038L6.66548 8.06122C6.86633 8.20182 7.13367 8.20182 7.33452 8.06122L12.25 4.62038Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default MailSVG;
