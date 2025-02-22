type IconMaleProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const IconMale = ({
  width = 8,
  height = 21,
  fill = "#0F172A",
}: IconMaleProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20.875V13.875H0V7.87503C0 7.32503 0.195833 6.8542 0.5875 6.46253C0.979167 6.07086 1.45 5.87503 2 5.87503H6C6.55 5.87503 7.02083 6.07086 7.4125 6.46253C7.80417 6.8542 8 7.32503 8 7.87503V13.875H6V20.875H2ZM4 4.87503C3.45 4.87503 2.97917 4.6792 2.5875 4.28753C2.19583 3.89586 2 3.42503 2 2.87503C2 2.32503 2.19583 1.8542 2.5875 1.46253C2.97917 1.07086 3.45 0.875031 4 0.875031C4.55 0.875031 5.02083 1.07086 5.4125 1.46253C5.80417 1.8542 6 2.32503 6 2.87503C6 3.42503 5.80417 3.89586 5.4125 4.28753C5.02083 4.6792 4.55 4.87503 4 4.87503Z"
      fill={fill}
    />
  </svg>
);

export default IconMale;
