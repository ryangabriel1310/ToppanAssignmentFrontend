import { IconProps } from "../../types";

export default function ChevronUp({ width = 29, fillColor = "#D56767", rotation = 0 }: IconProps) {
  return (
    <svg
      width={width}
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-in-out",
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <g filter="url(#filter0_d_530_3)">
        <path d="M5.125 14.1875L14.5 4.8125L23.875 14.1875" stroke={fillColor} strokeWidth="3" />
      </g>
      {/* <defs>
        <filter
          id="filter0_d_530_3"
          x="0.0643311"
          y="0.691162"
          width="28.8713"
          height="20.557"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_530_3" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_530_3" result="shape" />
        </filter>
      </defs> */}
    </svg>
  );
}
