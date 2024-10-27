type IconStarProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

const IconStar = ({
  width = 19,
  height = 19,
  fill = "#FF5733",
}: IconStarProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.05165 0.908315C9.23506 0.536731 9.76494 0.536731 9.94835 0.908315L12.4738 6.02454C12.5465 6.17197 12.6871 6.2742 12.8498 6.29798L18.4981 7.12356C18.9081 7.18348 19.0715 7.6874 18.7747 7.97648L14.6884 11.9565C14.5705 12.0714 14.5166 12.2369 14.5445 12.3992L15.5087 18.0213C15.5788 18.4298 15.15 18.7413 14.7832 18.5484L9.73273 15.8924C9.58703 15.8158 9.41297 15.8158 9.26727 15.8924L4.21682 18.5484C3.85 18.7413 3.42123 18.4298 3.49129 18.0213L4.45554 12.3992C4.48337 12.2369 4.42954 12.0714 4.31161 11.9565L0.225339 7.97648C-0.0714577 7.6874 0.0919344 7.18348 0.501892 7.12356L6.15018 6.29798C6.31286 6.2742 6.45345 6.17197 6.52622 6.02455L9.05165 0.908315Z"
      fill={fill}
    />
  </svg>
);

export default IconStar;
