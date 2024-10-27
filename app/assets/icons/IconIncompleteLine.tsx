type IconIncompleteLineProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconIncompleteLine = ({
  width = 25,
  height = 3,
  stroke = "#CBD5E1",
}: IconIncompleteLineProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.72998"
      y1="1.47885"
      x2="24.73"
      y2="1.47885"
      stroke={stroke}
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />
  </svg>
);

export default IconIncompleteLine;
