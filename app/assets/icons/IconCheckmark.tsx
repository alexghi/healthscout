type IconCheckmarkProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const IconCheckmark = ({
  width = 11,
  height = 9,
  fill = "#10B981",
}: IconCheckmarkProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 11 9"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.47998 4.97885L3.72998 7.47885L9.97998 0.978851"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCheckmark;
