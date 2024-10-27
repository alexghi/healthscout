type IconSendProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconSend = ({
  width = 16,
  height = 16,
  stroke = "white",
}: IconSendProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3724 1.42224L7.03906 8.75557M14.3724 1.42224L9.70573 14.7556L7.03906 8.75557M14.3724 1.42224L1.03906 6.08891L7.03906 8.75557"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSend;
