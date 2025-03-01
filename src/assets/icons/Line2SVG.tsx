import React from 'react';

export interface IconProps {
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const Line2SVG: React.FC<IconProps> = ({ fill = '#12F7D6', height = 12, width = 160, style }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 12"
        fill="none"
        style={style}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM148.667 6C148.667 8.94552 151.054 11.3333 154 11.3333C156.946 11.3333 159.333 8.94552 159.333 6C159.333 3.05448 156.946 0.666667 154 0.666667C151.054 0.666667 148.667 3.05448 148.667 6ZM6 7H154V5H6V7Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default Line2SVG;
