type IconCompletedLineProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const IconCompletedLine = ({
  width = 25,
  height = 3,
  fill = "#10B981",
}: IconCompletedLineProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 3"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.72998"
      y1="1.47885"
      x2="24.73"
      y2="1.47885"
      stroke="#10B981"
      strokeWidth="1.5"
    />
  </svg>
);

export default IconCompletedLine;
