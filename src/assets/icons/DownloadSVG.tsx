import React from 'react';

export interface IconProps {
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const DownloadSVG: React.FC<IconProps> = ({ fill = '#292F36', height = 24, width = 24, style }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        style={style}
      >
        <path
          d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L13 12.5858V3Z"
          fill={fill}
        />
        <path
          d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V15C2 14.4477 2.44772 14 3 14Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default DownloadSVG;
