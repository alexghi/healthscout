type IconFlagProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconFlag = ({
  width = 13,
  height = 16,
  stroke = "#D7E4D8",
}: IconFlagProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.811279 9.72639C0.811279 9.72639 1.47795 9.05972 3.47795 9.05972C5.47795 9.05972 6.81128 10.3931 8.81128 10.3931C10.8113 10.3931 11.4779 9.72639 11.4779 9.72639V1.72639C11.4779 1.72639 10.8113 2.39306 8.81128 2.39306C6.81128 2.39306 5.47795 1.05972 3.47795 1.05972C1.47795 1.05972 0.811279 1.72639 0.811279 1.72639V9.72639ZM0.811279 9.72639V14.3931"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconFlag;
