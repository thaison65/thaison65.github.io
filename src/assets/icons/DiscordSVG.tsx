import React from 'react';

export interface IconProps {
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const DiscordSVG: React.FC<IconProps> = ({
  fill = 'currentColor',
  height = 24,
  width = 24,
  style,
}) => {
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
          d="M9.49219 3.67969L8.90625 3.75C8.90625 3.75 6.27832 4.03711 4.35938 5.57812H4.33594L4.3125 5.60156C3.88184 5.99707 3.69434 6.4834 3.39844 7.19531C3.10254 7.90723 2.78613 8.81543 2.50781 9.82031C1.95117 11.833 1.5 14.2705 1.5 16.5V16.6875L1.59375 16.875C2.28809 18.0938 3.52148 18.8701 4.66406 19.4062C5.80664 19.9424 6.79395 20.2266 7.47656 20.25L7.92188 20.2734L8.15625 19.875L8.97656 18.4219C9.84668 18.6182 10.8486 18.75 12 18.75C13.1514 18.75 14.1533 18.6182 15.0234 18.4219L15.8438 19.875L16.0781 20.2734L16.5234 20.25C17.2061 20.2266 18.1934 19.9424 19.3359 19.4062C20.4785 18.8701 21.7119 18.0938 22.4062 16.875L22.5 16.6875V16.5C22.5 14.2705 22.0488 11.833 21.4922 9.82031C21.2139 8.81543 20.8975 7.90723 20.6016 7.19531C20.3057 6.4834 20.1182 5.99707 19.6875 5.60156L19.6641 5.57812H19.6406C17.7217 4.03711 15.0938 3.75 15.0938 3.75L14.5078 3.67969L14.2969 4.21875C14.2969 4.21875 14.0801 4.7666 13.9453 5.39062C13.0957 5.27637 12.4014 5.25 12 5.25C11.5986 5.25 10.9043 5.27637 10.0547 5.39062C9.91992 4.7666 9.70312 4.21875 9.70312 4.21875L9.49219 3.67969ZM8.46094 5.39062C8.49316 5.49609 8.52539 5.58691 8.55469 5.67188C7.58496 5.91211 6.55078 6.27832 5.60156 6.86719L6.39844 8.13281C8.34375 6.92578 11.1387 6.75 12 6.75C12.8613 6.75 15.6562 6.92578 17.6016 8.13281L18.3984 6.86719C17.4492 6.27832 16.415 5.91211 15.4453 5.67188C15.4746 5.58691 15.5068 5.49609 15.5391 5.39062C16.2393 5.53125 17.5752 5.85352 18.6797 6.72656C18.6738 6.72949 18.9609 7.16309 19.2188 7.78125C19.4824 8.41699 19.7754 9.26367 20.0391 10.2188C20.5459 12.0498 20.9443 14.2793 20.9766 16.2422C20.5049 16.9629 19.6289 17.6133 18.7031 18.0469C17.8945 18.4248 17.2559 18.5625 16.875 18.6328L16.5 18C16.7227 17.918 16.9424 17.8271 17.1328 17.7422C18.2871 17.2354 18.9141 16.6875 18.9141 16.6875L17.9297 15.5625C17.9297 15.5625 17.5078 15.9492 16.5234 16.3828C15.5391 16.8164 14.0361 17.25 12 17.25C9.96387 17.25 8.46094 16.8164 7.47656 16.3828C6.49219 15.9492 6.07031 15.5625 6.07031 15.5625L5.08594 16.6875C5.08594 16.6875 5.71289 17.2354 6.86719 17.7422C7.05762 17.8271 7.27734 17.918 7.5 18L7.125 18.6328C6.74414 18.5625 6.10547 18.4248 5.29688 18.0469C4.37109 17.6133 3.49512 16.9629 3.02344 16.2422C3.05566 14.2793 3.4541 12.0498 3.96094 10.2188C4.22461 9.26367 4.51758 8.41699 4.78125 7.78125C5.03906 7.16309 5.32617 6.72949 5.32031 6.72656C6.4248 5.85352 7.76074 5.53125 8.46094 5.39062ZM9.375 10.5C8.79492 10.5 8.28223 10.8311 7.96875 11.25C7.65527 11.6689 7.5 12.1846 7.5 12.75C7.5 13.3154 7.65527 13.8311 7.96875 14.25C8.28223 14.6689 8.79492 15 9.375 15C9.95508 15 10.4678 14.6689 10.7812 14.25C11.0947 13.8311 11.25 13.3154 11.25 12.75C11.25 12.1846 11.0947 11.6689 10.7812 11.25C10.4678 10.8311 9.95508 10.5 9.375 10.5ZM14.625 10.5C14.0449 10.5 13.5322 10.8311 13.2188 11.25C12.9053 11.6689 12.75 12.1846 12.75 12.75C12.75 13.3154 12.9053 13.8311 13.2188 14.25C13.5322 14.6689 14.0449 15 14.625 15C15.2051 15 15.7178 14.6689 16.0312 14.25C16.3447 13.8311 16.5 13.3154 16.5 12.75C16.5 12.1846 16.3447 11.6689 16.0312 11.25C15.7178 10.8311 15.2051 10.5 14.625 10.5ZM9.375 12C9.41602 12 9.46875 12.0146 9.5625 12.1406C9.65625 12.2666 9.75 12.4863 9.75 12.75C9.75 13.0137 9.65625 13.2334 9.5625 13.3594C9.46875 13.4854 9.41602 13.5 9.375 13.5C9.33398 13.5 9.28125 13.4854 9.1875 13.3594C9.09375 13.2334 9 13.0137 9 12.75C9 12.4863 9.09375 12.2666 9.1875 12.1406C9.28125 12.0146 9.33398 12 9.375 12ZM14.625 12C14.666 12 14.7188 12.0146 14.8125 12.1406C14.9062 12.2666 15 12.4863 15 12.75C15 13.0137 14.9062 13.2334 14.8125 13.3594C14.7188 13.4854 14.666 13.5 14.625 13.5C14.584 13.5 14.5312 13.4854 14.4375 13.3594C14.3438 13.2334 14.25 13.0137 14.25 12.75C14.25 12.4863 14.3438 12.2666 14.4375 12.1406C14.5312 12.0146 14.584 12 14.625 12Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

export default DiscordSVG;