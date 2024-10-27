type IconSquaresProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconSquares = ({
  width = 20,
  height = 20,
  stroke = "white",
}: IconSquaresProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.22885H1V8.22885H8V1.22885Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 1.22885H12V8.22885H19V1.22885Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 12.2289H12V19.2289H19V12.2289Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12.2289H1V19.2289H8V12.2289Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSquares;
