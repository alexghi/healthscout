type IconCopyProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconCopy = ({
  width = 13,
  height = 16,
  stroke = "#D7E4D8",
}: IconCopyProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.44653 2.60714H10.7799C11.1335 2.60714 11.4726 2.74761 11.7227 2.99766C11.9727 3.24771 12.1132 3.58685 12.1132 3.94047V13.2738C12.1132 13.6274 11.9727 13.9666 11.7227 14.2166C11.4726 14.4667 11.1335 14.6071 10.7799 14.6071H2.77987C2.42624 14.6071 2.08711 14.4667 1.83706 14.2166C1.58701 13.9666 1.44653 13.6274 1.44653 13.2738V3.94047C1.44653 3.58685 1.58701 3.24771 1.83706 2.99766C2.08711 2.74761 2.42624 2.60714 2.77987 2.60714H4.1132M4.77987 1.2738H8.77987C9.14806 1.2738 9.44653 1.57228 9.44653 1.94047V3.2738C9.44653 3.64199 9.14806 3.94047 8.77987 3.94047H4.77987C4.41168 3.94047 4.1132 3.64199 4.1132 3.2738V1.94047C4.1132 1.57228 4.41168 1.2738 4.77987 1.2738Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCopy;
