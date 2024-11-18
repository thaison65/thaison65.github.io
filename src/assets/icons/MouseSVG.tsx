import React from 'react';

export interface IconProps {
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const MouseSVG: React.FC<IconProps> = ({
  fill = 'currentColor',
  height = 32,
  width = 44,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 44"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_1371)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z"
          fill={fill}
        />
        <path d="M17.3334 9.16663V16.5H14.6667V9.16663H17.3334Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_138_1371">
          <rect width="32" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MouseSVG;
