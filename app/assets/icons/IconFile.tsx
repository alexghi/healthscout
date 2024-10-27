type IconFileProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
};

const IconFile = ({
  width = 22,
  height = 23,
  stroke = "#D7E4D8",
}: IconFileProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.9794 10.9841L11.7894 20.1741C10.6635 21.3 9.13654 21.9325 7.54435 21.9325C5.95217 21.9325 4.4252 21.3 3.29935 20.1741C2.17351 19.0483 1.54102 17.5213 1.54102 15.9291C1.54102 14.3369 2.17351 12.81 3.29935 11.6841L12.4894 2.49412C13.2399 1.74356 14.2579 1.3219 15.3194 1.3219C16.3808 1.3219 17.3988 1.74356 18.1494 2.49412C18.8999 3.24469 19.3216 4.26267 19.3216 5.32412C19.3216 6.38558 18.8999 7.40356 18.1494 8.15412L8.94935 17.3441C8.57407 17.7194 8.06508 17.9302 7.53435 17.9302C7.00362 17.9302 6.49463 17.7194 6.11935 17.3441C5.74407 16.9688 5.53324 16.4599 5.53324 15.9291C5.53324 15.3984 5.74407 14.8894 6.11935 14.5141L14.6094 6.03412"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconFile;
